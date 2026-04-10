'use strict';

const fs = require('fs');

function cpFile() {
  const [oldPath, newPath] = process.argv.slice(2);

  if (!oldPath || !newPath) {
    // eslint-disable-next-line no-console
    console.error('Error not path');

    return;
  }

  if (oldPath === newPath) {
    // eslint-disable-next-line no-console
    console.error('wrong  to copy to the same location');

    return;
  }

  try {
    fs.cpSync(oldPath, newPath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

cpFile();
