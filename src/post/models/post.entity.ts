import { UserEntity } from "src/user/models/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PostEntity {
    // need id
    @PrimaryGeneratedColumn()
    postId: number;
    
    // FOREIGN KEY need user id of post creator
    // THIS MIGHT NOT BE RIGHT
    @ManyToOne(type => UserEntity, userEntity => userEntity.id)
    // might not need to be array
    userEntity: number;
    
    // title
    @Column()
    title: string;

    // content
    @Column()
    content: string
        
    // latitude
    @Column()
    latitude: number;

    // longitude
    @Column()
    longitude: number;
}