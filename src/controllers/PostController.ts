import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";
class PostController {
  static createUser = async (req: Request, res: Response) => {
  
    const newUser = {
        name:req.body.name,
        phone:req.body.phone,
      email: req.body.email,
      password: req.body.password
    };
    
    const post = getRepository(Post).create(newUser);
    const result = await getRepository(Post).save(post);
    return res.json(result);
  };

  static getUsers = async (req: Request, res: Response) => {
    const result = await getRepository(Post).find();
    return res.json(result);
  };

  static getOneUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await getRepository(Post).findOne(id);
    return res.json(post);
  };

  static updateUser = async (req: Request, res: Response) => {
    const post = await getRepository(Post).findOne(req.params.id);
    if (post) {
      getRepository(Post).merge(post, req.body);
      const result = await getRepository(Post).save(post);
      return res.json(result);
    }
    return res.json({ msg: "Post Not Found" });
  };

  static deleteUser = async (req: Request, res: Response) => {
    const post = await getRepository(Post).delete(req.params.id);
    return res.json(post);
  };
}
export default PostController;