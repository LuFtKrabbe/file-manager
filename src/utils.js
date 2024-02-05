import { isAbsolute, resolve } from 'node:path'

const resolvePath = (currentPath, path) => {
  let resolvedPath = '';

  if (isAbsolute(path)) {
    resolvedPath = path;
  } else {
    resolvedPath = resolve(currentPath, path);
  }

  return resolvedPath;
}

export default resolvePath;