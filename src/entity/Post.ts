import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Post {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    email: string;
   
  
    @Column()
    password: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  }