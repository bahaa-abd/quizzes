/**
 * @swagger
 * tags:
 *   name: questions
 *   description: Question management and retrieval
 */

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Create a question
 *     description: ADMIN can create question.
 *     tags: [questions]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createQuestion'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/Question'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all questions
 *     description: USER,ADMIN can retrieve all questions.
 *     tags: [questions]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: what fields do you want to show (ex. name,price)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of questions
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: key-words you want to search about it
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name,-price)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Question'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     summary: Get a question
 *     description: USER,ADMIN can use this router.
 *     tags: [questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/Question'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a question
 *     description: ADMIN can use this router.
 *     tags: [questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateQuestion'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/Question'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  question.
 *     description: ADMIN can use this router.
 *     tags: [questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

export const Question = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    answers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  properties answers
          isCorrect: { type: 'boolean' },

          text: { type: 'string' },

          sorting: { type: 'number' },
        },
      },
    },
    text: { type: 'string' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    answers: [
      {
        // property example answers
        isCorrect: true,

        text: 'i am ali',

        sorting: 1,
      },
    ],

    text: 'who are you?',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createQuestion = {
  type: 'object',
  properties: {
    // create property
    answers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  create  properties answers
          isCorrect: { type: 'boolean' },

          text: { type: 'string' },

          sorting: { type: 'number' },
        },
      },
    },
    text: { type: 'string' },
  },
  example: {
    // create property example
    answers: [
      {
        // create property example answers
        isCorrect: true,

        text: 'i am ali',

        sorting: 1,
      },
    ],

    text: 'who are you?',
  },
  required: [
    // required property

    'answers.text',

    'text',
  ],
};
export const updateQuestion = {
  type: 'object',
  properties: {
    // update property
    answers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  update properties answers
          isCorrect: { type: 'boolean' },

          text: { type: 'string' },

          sorting: { type: 'number' },
        },
      },
    },
    text: { type: 'string' },
  },
  example: {
    // update property example
    answers: [
      {
        // update property example answers
        isCorrect: true,

        text: 'i am ali',

        sorting: 1,
      },
    ],

    text: 'who are you?',
  },
};
