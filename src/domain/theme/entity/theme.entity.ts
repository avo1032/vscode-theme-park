import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  theme_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  unique_id: string;

  @Column()
  image: string;
}
