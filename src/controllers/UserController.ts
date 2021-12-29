import { json } from "body-parser";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user";
import Userschema from "../Valdation/Schema";
const bcrypt = require("bcryptjs");

class UserController {
  //create a new user
  static createUser = async (req: Request, res: Response) => {
    let Data: any;
    try {
      Data = await Userschema.validateAsync(req.body);
      const salt: any = await bcrypt.genSalt(10);
      Data.password = await bcrypt.hash(Data.password, salt);
    } catch (error) {
      return res.json(error.message);
    }
    const UserData: any = getRepository(User).create(Data);
    const result: any = await getRepository(User).save(UserData);
    return res.status(200).json(result);
  };

  //get  a new user/all user
  static getUsers = async (req: Request, res: Response) => {
    const id = req.params.id;
    const phone = req.params.phone;
    let OneUser: any;
    if (id === undefined && phone === undefined) {
      const result = await getRepository(User).find();
      return res.json(result);
    } else {
      OneUser = await getRepository(User).findOne(
        { id: id } && { phone: phone }
      );
      if (OneUser === undefined) {
        return res.status(404).send("user not found");
      } else return res.status(200).json(OneUser);
    }
  };

  //update a new user
  static updateUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const phone: string = req.params.phone;
    const Data: any = await getRepository(User).findOne(
      { id: id } && { phone: phone }
    );
    if (Data) {
      getRepository(User).merge(Data, req.body);
      const result = await getRepository(User).save(Data);
      return res.json(result);
    }
    return res.json({ msg: "User Not Found" });
  };

  //delete a user
  static deleteUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const phone: string = req.params.phone;

    const Data: any = await getRepository(User).findOne(
      { id: id } && { phone: phone }
    );
    if (Data) {
      getRepository(User).delete({ id: id } && { phone: phone });
      return res.json({ msg: "User deleted sucessfully from record" });
    }
    return res.json({ msg: "User Not Found" });
  };
}
export default UserController;
