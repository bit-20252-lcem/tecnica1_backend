import Employed from '../models/employed.model.js';
import department from '../models/department.model.js';

export const getAllEmployees = async (req, res) => {
    try {
        
        const employees = await Employed.find().populate('dept_code');
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getEmployeeByName = async (req, res) => {
    try {
        const {name} = req.params;
        const employee = await Employed.findOne({name}).populate('department');
        if (!employee) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createEmployee = async (req, res) => {
    const { name, dept_code } = req.body;
    if (!name || !dept_code) {
        return res.status(400).json({ message: 'El nombre y el código de departamento son obligatorios.' });
    }

    try {
        
        const departmentExists = await department.findById(dept_code);
        if (!departmentExists) {
            return res.status(400).json({ message: 'El código de departamento especificado no existe.' });
        }

        const newEmployee = new Employee({ name, dept_code });
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};