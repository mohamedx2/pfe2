const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const stagiaireController = require('../controllers/stagaireController');
const empreinteController = require('../controllers/emprenteController');
const historiqueController = require('../controllers/histauriqueController');

// User Routes
router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

// Administrateur Routes
router.post('/admin', adminController.createAdmin);
router.get('/admin/:id', adminController.getAdmin);
router.put('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);

// Stagiaire Routes
router.post('/stagiaire', stagiaireController.createStagiaire);
router.get('/stagiaire/:id', stagiaireController.getStagiaire);
router.put('/stagiaire/:id', stagiaireController.updateStagiaire);
router.delete('/stagiaire/:id', stagiaireController.deleteStagiaire);

// Empreinte Routes
router.post('/empreinte', empreinteController.createEmpreinte);
router.get('/empreinte/:id', empreinteController.getEmpreinte);
router.put('/empreinte/:id', empreinteController.updateEmpreinte);
router.delete('/empreinte/:id', empreinteController.deleteEmpreinte);

// Historique Routes
router.post('/historique', historiqueController.createHistorique);
router.get('/historique/:id', historiqueController.getHistorique);

module.exports = router;
