import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getThemes() {
    return [
      {
        theme_id: 1,
        name: 'One Dark Pro',
        description: `Atom's iconic One Dark theme, and one of the most installed themes for VS Code!`,
        unique_id: 'zhuangtongfa.Material-theme',
        image: 'https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/normal.png',
      },
    ];
  }
}
