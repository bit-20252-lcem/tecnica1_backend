import { Router } from 'express';
import {
    getAllEmployees,
    getEmployeeByName,
    createEmployee,
 //   updateEmployee,
//    deleteEmployee
} from '../controllers/employed.controller.js';

const router = Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeByName);
router.post('/', createEmployee);
//router.put('/:id', updateEmployee);
//router.delete('/:id', deleteEmployee);

export default router;