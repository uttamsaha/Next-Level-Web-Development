import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  //static mehtod
  // const result = await StudentModel.create(studentData); //builtin static method

  //builtin instance method
  const student = new Student(studentData);

  if(await student.isUserExist(studentData.id)){
    throw new Error('User already exist');
  }
  const result = await student.save();
  return result;
};

const getAllStudentDataFromDB = async () => {
  const result = Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = Student.findOne({ id: id }); //{id} manei id: id
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentDataFromDB,
  getSingleStudentFromDB,
};
