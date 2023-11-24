// import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

//creating interface
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};

//-------------------------------------------------------->
//custom instance method to check a user exist in databsae or not
export type StudentMethods = {
  isUserExist(id: string): Promise<TStudent | null>; //isUserExist ekta method eta id parameter niye ekta promise return korbe // db theke student na pele null asbe se jonno null dichi
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethods
>;
