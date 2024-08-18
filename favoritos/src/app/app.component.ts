import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'favoritos';

  inversoes : number = 0;
  lista: number[] = [];
  similaridade: number = -1

  listaFilmes: any[] = []
  totalFilmes: number = 0;

  filmes = [
    { id: 1, name: 'Avatar', ano: 2009, bilheteria: '2.923.7' },
    { id: 2, name: 'Vingadores: Ultimato', ano: 2019, bilheteria: '2.799.4' },
    { id: 3, name: 'Avatar: O Caminho da Água', ano: 2022, bilheteria: '2.320.3' },
    { id: 4, name: 'Titanic', ano: 1997, bilheteria: '2.264.7' },
    { id: 5, name: 'Star Wars: Episódio VII - O Despertar da Força', ano: 2015, bilheteria: '2.071.3' },
    { id: 6, name: 'Vingadores: Guerra Infinita', ano: 2018, bilheteria: '2.052.4' },
    { id: 7, name: 'Homem-Aranha: Sem Volta Para Casa', ano: 2021, bilheteria: '1.921.8' },
    { id: 8, name: 'Jurassic World: O Mundo dos Dinossauros', ano: 2015, bilheteria: '1.671.5' },
    { id: 9, name: 'O Rei Leão', ano: 2019, bilheteria: '1.663.1' },
    { id: 10, name: 'Divertida Mente 2', ano: 2024, bilheteria: '1.558.8' },
    { id: 11, name: 'Os Vingadores', ano: 2012, bilheteria: '1.520.5' },
    { id: 12, name: 'Velozes e Furiosos 7', ano: 2015, bilheteria: '1.515.3' },
    { id: 13, name: 'Top Gun: Maverick', ano: 2022, bilheteria: '1.495.7' },
    { id: 14, name: 'Frozen II', ano: 2019, bilheteria: '1.453.7' },
    { id: 15, name: 'Barbie', ano: 2023, bilheteria: '1.445.6' },
    { id: 16, name: 'Vingadores: Era de Ultron', ano: 2015, bilheteria: '1.405.0' },
    { id: 17, name: 'Frozen: Uma Aventura Congelante', ano: 2013, bilheteria: '1.397.0' },
    { id: 18, name: 'Super Mario Bros. - O Filme', ano: 2023, bilheteria: '1.362.0' },
    { id: 19, name: 'Harry Potter e As Relíquias da Morte: Parte 2', ano: 2011, bilheteria: '1.357.0' },
    { id: 20, name: 'Pantera Negra', ano: 2018, bilheteria: '1.349.9' },
    { id: 21, name: 'Star Wars: Episódio VIII - Os Últimos Jedi', ano: 2017, bilheteria: '1.334.4' },
    { id: 22, name: 'Jurassic World: Reino Ameaçado', ano: 2018, bilheteria: '1.310.5' },
    { id: 23, name: 'A Bela e A Fera', ano: 2017, bilheteria: '1.263.5' },
    { id: 24, name: 'Os Incríveis 2', ano: 2018, bilheteria: '1.243.2' },
    { id: 25, name: 'Velozes e Furiosos 8', ano: 2017, bilheteria: '1.236.0' },
    { id: 26, name: 'Homem de Ferro 3', ano: 2013, bilheteria: '1.215.6' },
    { id: 27, name: 'Minions', ano: 2015, bilheteria: '1.159.4' },
    { id: 28, name: 'O Senhor dos Anéis: O Retorno do Rei', ano: 2003, bilheteria: '1.156.6' },
    { id: 29, name: 'Capitão América: Guerra Civil', ano: 2016, bilheteria: '1.155.0' },
    { id: 30, name: 'Aquaman', ano: 2018, bilheteria: '1.152.0' },
    { id: 31, name: '007: Operação Skyfall', ano: 2012, bilheteria: '1.142.5' },
    { id: 32, name: 'Homem-Aranha: Longe de Casa', ano: 2019, bilheteria: '1.131.9' },
    { id: 33, name: 'Capitã Marvel', ano: 2019, bilheteria: '1.131.4' },
    { id: 34, name: 'Transformers: O Lado Oculto da Lua', ano: 2011, bilheteria: '1.123.8' },
    { id: 35, name: 'Parque dos Dinossauros', ano: 1993, bilheteria: '1.114.4' },
    { id: 36, name: 'Transformers: A Era da Extinção', ano: 2014, bilheteria: '1.104.0' },
    { id: 37, name: 'Batman - O Cavaleiro das Trevas Ressurge', ano: 2012, bilheteria: '1.085.2' },
    { id: 38, name: 'Coringa', ano: 2019, bilheteria: '1.079.0' },
    { id: 39, name: 'Star Wars: Episódio IX - A Ascensão Skywalker', ano: 2019, bilheteria: '1.077.0' },
    { id: 40, name: 'Toy Story 4', ano: 2019, bilheteria: '1.073.8' },
    { id: 41, name: 'Toy Story 3', ano: 2010, bilheteria: '1.067.3' },
    { id: 42, name: 'Piratas do Caribe: O Baú da Morte', ano: 2006, bilheteria: '1.066.2' },
    { id: 43, name: 'Rogue One: Uma História Star Wars', ano: 2016, bilheteria: '1.058.7' },
    { id: 44, name: 'Aladdin', ano: 2019, bilheteria: '1.054.3' },
    { id: 45, name: 'Piratas do Caribe: Navegando em Águas Misteriosas', ano: 2011, bilheteria: '1.046.7' },
    { id: 46, name: 'Star Wars: Episódio I - A Ameaça Fantasma', ano: 1999, bilheteria: '1.045.7' },
    { id: 47, name: 'Meu Malvado Favorito 3', ano: 2017, bilheteria: '1.034.8' },
    { id: 48, name: 'Procurando Dory', ano: 2016, bilheteria: '1.029.3' },
    { id: 49, name: 'Zootopia', ano: 2016, bilheteria: '1.025.5' },
    { id: 50, name: 'Alice no País das Maravilhas', ano: 2010, bilheteria: '1.025.5' },
  ]

  getLista(number : number){
    this.totalFilmes = number;
    this.listaFilmes = this.filmes.slice(0, number)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listaFilmes, event.previousIndex, event.currentIndex);
  }

  getInversoes() {
    const novosIds = this.listaFilmes.map(item => item.id);
    console.log('Ordenação salva:', novosIds);
    [this.inversoes, this.lista]= this.sortAndCount(novosIds)
    console.log(this.inversoes, this.lista)
    this.similaridade = this.calcularSimilaridade(this.inversoes, this.totalFilmes)
  }

  sortAndCount(lista: number[]): [number, number[]] {
 
    if (lista.length <= 1) {
      return [0, lista];
    }

    const metade = Math.floor(lista.length / 2);
    const esquerda = lista.slice(0, metade);
    const direita = lista.slice(metade);

    const [rA, A] = this.sortAndCount(esquerda);
    const [rB, B] = this.sortAndCount(direita);

    const [rL, listaOrdenada] = this.mergeAndCount(A, B);

    const totalInversoes = rA+ rB+ rL
    return [totalInversoes, listaOrdenada];
  }

  mergeAndCount(esquerdo: number[], direito: number[]): [number, number[]] {
    let i = 0, j = 0;
    let inversoes = 0;
    const listaOrdenada: number[] = [];

    while (i < esquerdo.length && j < direito.length) {
        if (esquerdo[i] <= direito[j]) {
            listaOrdenada.push(esquerdo[i]);
            i++;
        } else {
            listaOrdenada.push(direito[j]);
            j++;
            inversoes += esquerdo.length - i;
        }
    }

    while (i < esquerdo.length) {
      listaOrdenada.push(esquerdo[i]);
      i++
    }

    while (j < direito.length ) {
      listaOrdenada.push(direito[j]);
      j++
    }

    return [inversoes, listaOrdenada];
  }


  calcularSimilaridade(inversoes: number, n: number): number {
    const maxInversoes = (n * (n - 1)) / 2;
    const similaridade = (1 - inversoes / maxInversoes) * 100;
    return similaridade;
  }
  
}
