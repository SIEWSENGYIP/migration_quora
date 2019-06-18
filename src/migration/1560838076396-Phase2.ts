import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase21560838076396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" ADD "user_id" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "user_id" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_82c53e1db067ff3d6ef17dfd5c4" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_add8ab72aec4ce5eb87fdc2740d" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_add8ab72aec4ce5eb87fdc2740d"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_82c53e1db067ff3d6ef17dfd5c4"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "user_id"`);
    }

}
