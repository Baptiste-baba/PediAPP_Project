const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://bdouchet92:QXHlD1P5iJTBYfa0@pediapp-db.exwk34t.mongodb.net/?retryWrites=true&w=majority&appName=PediAPP-DB';
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.json());
app.use(express.urlencoded());

app.post('/api/register', async function (req, res) {
    try {
        const userData = req.body;
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db('PediAPP-DB');
        const collection = db.collection('Users');

        // Utilisez userData.email si c'est l'email que vous utilisez pour vérifier l'unicité.
        const existingUser = await collection.findOne({ email: userData.email });

        if (existingUser) {
            res.status(400).json('Cet utilisateur existe déjà.');
        } else {
            const result = await collection.insertOne({
                name: userData.name,
                email: userData.email, // Assurez-vous que c'est userData.email ici et non userData.username si vous utilisez l'email comme identifiant.
                childName: userData.childName,
                dateOfBirth: userData.dateOfBirth,
                gender: userData.gender,
                password: hashedPassword,
                role: 'user'
            });
            res.status(200).json('Inscription réussie.');
        }

        client.close();
    } catch (err) {
        console.error(err);
        res.status(500).json('Erreur de serveur');
    }
});

app.post('/api/login', async function (req, res) {
    try {
        const { email, password } = req.body;  // Utilisez destructuration pour plus de clarté

        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db('PediAPP-DB');
        const collection = db.collection('Users'); // Assurez-vous que le nom de la collection est correct

        const user = await collection.findOne({ email }); // Vous utilisez le champ email pour le login

        if (!user) {
            res.status(401).json({ message: 'Nom d\'utilisateur incorrect' });
        } else {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                res.status(401).json({ message: 'Mot de passe incorrect' });
            } else {
                // Envoyez une réponse positive, par exemple un jeton d'authentification
                res.status(200).json({ message: 'Connexion réussie', user });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur de serveur' });
    }
});


app.get('/api/appointments', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const collection = client.db("PediAPP-DB").collection("appointments");
        const appointments = await collection.find({}).toArray();
        res.json(appointments);
    } finally {
        await client.close();
    }
});

app.get('/api/Doctors', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const collection = client.db("PediAPP-DB").collection("Doctors");
        const Doctors = await collection.find({}).toArray();
        res.json(Doctors);
    } finally {
        await client.close();
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/api/diseases/:diseaseId', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const collection = client.db("PediAPP-DB").collection("DiseasesInfos");
        const disease = await collection.findOne({ name: req.params.diseaseName });
        if (!disease) {
            return res.status(404).json({ message: 'Maladie non trouvée' });
        }
        res.json(disease);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur de serveur' });
    } finally {
        await client.close();
    }
});