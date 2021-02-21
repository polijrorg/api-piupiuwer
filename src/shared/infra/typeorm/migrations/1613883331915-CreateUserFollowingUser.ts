import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserFollowingUser1613883331915 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_following_users',
        columns: [
          {
            name: 'usersId_1',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'usersId_2',
            type: 'uuid',
            isPrimary: true,

          },
        ],
        foreignKeys: [
          {
            name: 'FollowerUser',
            columnNames: ['usersId_1'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FollowedrUser',
            columnNames: ['usersId_2'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',

          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_following_users');
  }
}
