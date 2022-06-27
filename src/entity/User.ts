import { Column } from "typeorm";
import { EntityModel } from "@midwayjs/orm";

@EntityModel("user", { schema: "qiduoduo-test" })
export class User {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "username", nullable: true, length: 64 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 64 })
  password: string | null;
}
