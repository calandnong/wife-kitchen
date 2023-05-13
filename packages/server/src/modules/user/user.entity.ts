import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import * as argon2 from 'argon2';
import { BaseEntity } from '@/shared/entity/base.entity';

@Entity('users')
export class User extends BaseEntity {
  /**
   * 用户id
   */
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键,自增',
  })
  id: number;

  /**
   * 用户名
   */
  @Column({
    name: 'username',
    type: 'varchar',
    length: 255,
    comment: '用户名称',
    default: '',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  /**
   * 用户密码
   */
  @Column({
    name: 'password',
    type: 'text',
    comment: '用户密码',
    select: false,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  /**
   * 密码加密逻辑
   */
  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
