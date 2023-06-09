import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Injectable } from "@nestjs/common";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private username: string;

  @Column()
  private password: string;
}
