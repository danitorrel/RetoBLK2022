import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.playAudio();

    const resultarray = [
      sessionStorage.getItem('Score1'),
      sessionStorage.getItem('Score2'),
      sessionStorage.getItem('Score3'),
      sessionStorage.getItem('Score4'),
    ];
    const scoremap = resultarray.map((x) => parseInt(x!));
    const score = scoremap.reduce((a, b) => a + b);
    let description = '';
    let level = '';
    let doneCourses = 0;

    switch (score) {
      case 0:
        level = 'Iniciado Jedi';
        break;
      case 1:
        level = 'Iniciado Jedi';
        break;
      case 2:
        level = 'Iniciado Jedi';
        break;
      case 3:
        level = 'Iniciado Jedi';
        break;
      case 4:
        level = 'Iniciado Jedi';
        break;
      case 5:
        level = 'Iniciado Jedi';
        break;
      case 6:
        level = 'Iniciado Jedi';
        break;
      case 7:
        level = 'Iniciado Jedi';
        break;
      case 8:
        level = 'Padawan Jedi';
        break;
      case 9:
        level = 'Padawan Jedi';
        break;
      case 10:
        level = 'Padawan Jedi';
        break;
      case 11:
        level = 'Caballero Jedi';
        break;
      case 12:
        level = 'Caballero Jedi';
        break;
      case 13:
        level = 'Caballero Jedi';
        break;
      case 14:
        level = 'Maestro Jedi';
        break;
      case 15:
        level = 'Maestro Jedi';
        break;
      case 16:
        level = 'Maestro Jedi';
        break;
      case 17:
        level = 'Maestro Yoda';
        break;
      case 18:
        level = 'Maestro Yoda';
        break;
      case 19:
        level = 'Maestro Yoda';
        break;

      default:
        level = 'Iniciado Jedi';
        break;
    }
    if (level === 'Iniciado Jedi') {
      description = 'Si aprender a invertir quieres... estudiar mucho tú debes';
      doneCourses = 0;
    } else if (level === 'Padawan Jedi') {
      description =
        'Poco conocimiento de la fuerza tienes... seguir entrenando debes';
      doneCourses = 3;
    } else if (level === 'Caballero Jedi') {
      description =
        'Pocas ganancias invirtiendo y ahorrando tienes... arriesgarte más tu debes';
      doneCourses = 6;
    } else if (level === 'Mestro Jedi') {
      description = 'Poderoso maestro ya eres... confiarte no debes';
      doneCourses = 9;
    } else {
      description = 'Aliado de la fuerza ya eres... un último paso dar debes';
      doneCourses = 12;
    }
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('score', score.toString());
    sessionStorage.setItem('level', level);
    sessionStorage.setItem('doneCourses', doneCourses.toString());
    sessionStorage.getItem('level');
    if (sessionStorage.getItem('level') != '') {
      setTimeout(() => {
        this.router.navigate(['results']);
      }, 3000);
    }
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../../../assets/soundeffect_.mp3';
    audio.load();
    audio.play();
  }
}
