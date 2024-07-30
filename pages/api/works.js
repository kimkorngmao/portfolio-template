import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const worksDirectory = path.join(process.cwd(), 'public/works');
  const filenames = fs.readdirSync(worksDirectory);

  const images = filenames.map(name => ({
    src: `/works/${name}`,
    name: name.split('.').slice(0, -1).join('.')
  }));

  res.status(200).json({ images });
}
