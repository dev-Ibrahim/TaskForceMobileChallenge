import SQLite from 'react-native-sqlite-storage';
import {getCurrentDate} from './util';
import {useSelector, useDispatch} from 'react-redux';
import {setAllTasks} from '../redux/actions';

export const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {
    console.log('connected to db');
  },
  err => {
    console.log(err);
  },
);

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ToDoTasks ' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'Title TEXT NOT NULL, ' +
        'Description TEXT NOT NULL, ' +
        'Priority TEXT NOT NULL, ' +
        'DateCreated TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, ' +
        'DateModified TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, ' +
        'isActive INTEGER DEFAULT 1)',
      [],
      (tx, result) => {
        console.log('Table created');
      },
      err => {
        console.log(err);
      },
    );
  });
};

export const addNewTask = task => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO ToDoTasks(Title, Description, Priority, DateCreated, DateModified) VALUES(?,?,?,?,?)',
      [
        task.title,
        task.description,
        task.priority,
        `${getCurrentDate()}`,
        `${getCurrentDate()}`,
      ],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
      },
      err => {
        console.log(err);
      },
    );
  });
};

export const updateTask = task => {
  console.log(task);
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE ToDoTasks SET Title = ?, Description = ?, Priority = ?, DateModified= ? WHERE ID =?',
      [
        task.title,
        task.description,
        task.priority,
        `${getCurrentDate()}`,
        task.ID,
      ],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
      },
      err => {
        console.log(err);
      },
    );
  });
};

export const deleteTask = id => {
  console.log(id);
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM ToDoTasks WHERE ID =?',
      [id],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
      },
      err => {
        console.log(err);
      },
    );
  });
};

export const taskComplete = (id, isActive) => {
  isActive = isActive ? 0 : 1;
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE ToDoTasks SET isActive = ? WHERE ID =?',
      [isActive, id],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
      },
      err => {
        console.log(err);
      },
    );
  });
};
