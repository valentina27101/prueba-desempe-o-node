 /**
  * @swagger
  * /auth/register:
  *   post:
  *     summary: Register a new user
  *     tags:
  *       - Authentication
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             required:
  *               - name
  *               - email
  *               - password
  *             properties:
  *               name:
  *                 type: string
  *                 example: Juan Perez
  *               email:
  *                 type: string
  *                 format: email
  *                 example: juan@test.com
  *               password:
  *                 type: string
  *                 format: password
  *                 example: "12345678"
  *               role:
  *                 type: string
  *                 enum:
  *                   - ADMIN
  *                   - GESTOR
  *                 example: GESTOR
  *     responses:
  *       201:
  *         description: User registered successfully
  *       400:
  *         description: Invalid data
  *       409:
  *         description: Email already registered
  */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: Authenticates a registered user and returns a JWT.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful.
 *       400:
 *         description: Invalid data.
 *       401:
 *         description: Invalid credentials.
 */

/**
 * @swagger
 * tags:
 *   name: Clinics
 *   description: Clinic management
 */

/**
 * @swagger
 * /api/clinics:
 *   post:
 *     summary: Create a clinic
 *     tags: [Clinics]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - nit
 *               - responsibleName
 *             properties:
 *               name:
 *                 type: string
 *                 example: Clinica Riwi
 *               nit:
 *                 type: string
 *                 example: "900123456"
 *               responsibleName:
 *                 type: string
 *                 example: Juan Perez
 *     responses:
 *       201:
 *         description: Clinic created successfully
 *       409:
 *         description: Clinic NIT already registered
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 *
 *   get:
 *     summary: Get all active clinics
 *     tags: [Clinics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of active clinics
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 */

/**
 * @swagger
 * /api/clinics/{id}:
 *   get:
 *     summary: Get a clinic by ID
 *     tags: [Clinics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Clinic found successfully
 *       404:
 *         description: Clinic not found
 *       401:
 *         description: JWT required
 *
 *   put:
 *     summary: Update a clinic
 *     tags: [Clinics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Clinica Actualizada
 *               nit:
 *                 type: string
 *                 example: "900987654"
 *               responsibleName:
 *                 type: string
 *                 example: Maria Lopez
 *     responses:
 *       200:
 *         description: Clinic updated successfully
 *       400:
 *         description: Invalid data
 *       404:
 *         description: Clinic not found
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 *
 *   delete:
 *     summary: Logically delete a clinic
 *     tags: [Clinics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Clinic deleted successfully
 *       404:
 *         description: Clinic not found
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 */

 /**
  * @swagger
  * /warehouses:
  *   get:
  *     summary: Get all active warehouses
  *     tags:
  *       - Warehouses
  *     security:
  *       - bearerAuth: []
  *     responses:
  *       200:
  *         description: List of active warehouses
  *       401:
  *         description: JWT required
  *
  *   post:
  *     summary: Create a warehouse
  *     tags:
  *       - Warehouses
  *     security:
  *       - bearerAuth: []
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             required:
  *               - name
  *               - location
  *             properties:
  *               name:
  *                 type: string
  *                 example: Central Warehouse
  *               location:
  *                 type: string
  *                 example: Barranquilla
  *     responses:
  *       201:
  *         description: Warehouse created successfully
  *       400:
  *         description: Invalid data
  *       401:
  *         description: JWT required
  *       403:
  *         description: Insufficient permissions
  */

/**
 * @swagger
 * /warehouses/{id}:
 *   get:
 *     summary: Get a warehouse by id
 *     tags:
 *       - Warehouses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Warehouse found
 *       401:
 *         description: JWT required
 *       404:
 *         description: Warehouse not found
 *
 *   put:
 *     summary: Update a warehouse
 *     tags:
 *       - Warehouses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Central Warehouse
 *               location:
 *                 type: string
 *                 example: Barranquilla
 *     responses:
 *       200:
 *         description: Warehouse updated successfully
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: Warehouse not found
 *
 *   delete:
 *     summary: Logically delete a warehouse
 *     tags:
 *       - Warehouses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Warehouse deleted successfully
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: Warehouse not found
 */


/**
 * ============================================================
 * MEDICINES
 * ============================================================
 */

/**
 * @swagger
 * /medicines:
 *   get:
 *     summary: Get all active medicines
 *     tags:
 *       - Medicines
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of active medicines
 *       401:
 *         description: JWT required
 */

/**
 * @swagger
 * /medicines/{id}:
 *   get:
 *     summary: Get a medicine by ID
 *     tags:
 *       - Medicines
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Medicine found successfully
 *       401:
 *         description: JWT required
 *       404:
 *         description: Medicine not found
 */

/**
 * @swagger
 * /medicines:
 *   post:
 *     summary: Create a medicine
 *     tags:
 *       - Medicines
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *                 example: Acetaminophen
 *               description:
 *                 type: string
 *                 example: Pain reliever and fever reducer
 *               stock:
 *                 type: integer
 *                 example: 100
 *     responses:
 *       201:
 *         description: Medicine created successfully
 *       400:
 *         description: Invalid data
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 */

/**
 * @swagger
 * /medicines/{id}:
 *   put:
 *     summary: Update a medicine
 *     tags:
 *       - Medicines
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Acetaminophen
 *               description:
 *                 type: string
 *                 example: Updated medicine description
 *               stock:
 *                 type: integer
 *                 example: 150
 *     responses:
 *       200:
 *         description: Medicine updated successfully
 *       400:
 *         description: Invalid data
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: Medicine not found
 */

/**
 * @swagger
 * /medicines/{id}:
 *   delete:
 *     summary: Logically delete a medicine
 *     tags:
 *       - Medicines
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Medicine deleted successfully
 *       401:
 *         description: JWT required
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: Medicine not found
 */


/**
 * ============================================================
 * SUPPLY REQUESTS
 * ============================================================
 */

/**
 * @swagger
 * /supply-requests:
 *   get:
 *     summary: Get all supply requests
 *     tags:
 *       - Supply Requests
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of supply requests
 *       401:
 *         description: Authentication token required
 */

/**
 * @swagger
 * /supply-requests/{id}:
 *   get:
 *     summary: Get a supply request by ID
 *     tags:
 *       - Supply Requests
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Supply request found successfully
 *       401:
 *         description: Authentication token required
 *       404:
 *         description: Supply request not found
 */

/**
 * @swagger
 * /supply-requests:
 *   post:
 *     summary: Create a supply request
 *     tags:
 *       - Supply Requests
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clinicId
 *               - medicineId
 *               - quantity
 *             properties:
 *               clinicId:
 *                 type: integer
 *                 example: 1
 *               medicineId:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       201:
 *         description: Supply request created successfully
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Authentication token required
 *       403:
 *         description: Insufficient permissions
 */

/**
 * @swagger
 * /supply-requests/{id}/status:
 *   patch:
 *     summary: Approve or reject a supply request
 *     tags:
 *       - Supply Requests
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - APPROVED
 *                   - REJECTED
 *                 example: APPROVED
 *     responses:
 *       200:
 *         description: Supply request status updated successfully
 *       400:
 *         description: Invalid status
 *       401:
 *         description: Authentication token required
 *       403:
 *         description: Only administrators can change the request status
 *       404:
 *         description: Supply request not found
 */
