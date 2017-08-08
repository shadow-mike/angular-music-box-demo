import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeconds'
})
export class FormatSecondsPipe implements PipeTransform {

  transform(seconds: number): string {
    if (typeof seconds !== 'number' || Number.isNaN(seconds)) return `--:--`;
    let s = parseInt(String(seconds)); // 秒
    let m = 0; // 分
    if (s > 60) {
      m = parseInt(String(s / 60));
      s = parseInt(String(s % 60));
    }
    let result = s > 10 ? parseInt(String(s)) : `0${parseInt(String(s))}`;
    result = m > 0 ?
      m > 10 ?
        `${parseInt(String(m))}:${result}`
        : `0${parseInt(String(m))}:${result}`
      : `00:${result}`;

    return result;
  }

}
