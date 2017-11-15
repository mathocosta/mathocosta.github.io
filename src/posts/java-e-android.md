Esse semestre resolvi fazer a cadeira de Programação para Dispositivos Móveis, que aborda a programação em geral para esses dispositivos e depois há um estudo mais a fundo nas duas principais plataformas no mercado. E como é de se esperar de um curso acadêmico, há trabalhos que envolvem a leitura de artigos sobre o tema. E o tema desse trabalho achei interessante(não que os outros não fossem) e decidi colocar aqui minhas opiniões.

O assunto abordado era sobre Performance no Android, relacionado aos padrões de escrita e desenvolvimento do código. Dois me chamaram a atenção e são os que vou falar aqui. Os títulos dos artigos são:

> 1. [Cheon, Yoonsik. “Are Java Programming Best Practices Also Best Practices for Android?” (2016).](https://www.semanticscholar.org/paper/Are-Java-Programming-Best-Practices-Also-Best-Prac-Cheon/91fb441650b5f340d5aefefa2235c48dcd4cf52c)
> 2. [Morales, Rodrigo, Rubén Saborido, Foutse Khomh, Francisco Chicano and Giuliano Antoniol. “Anti-patterns and the energy efficiency of Android applications.” (2016)](https://www.semanticscholar.org/paper/Anti-patterns-and-the-energy-efficiency-of-Android-Morales-Saborido/6d485dd98cd9bc081934b80774272d3e4506b50f).

O primeiro questiona se os padrões de código indicados para Java são também indicados para Android, já o segundo faz uma análise de como os *anti-patterns* afetam na performance do aplicativo. Primeiro vou falar um pouco de cada um separadamente e depois o que tirei de conhecimento deles.

## 1. Are Java Best Pratices Also Best Pratices for Android?
Nesse o autor busca ver se algumas das boas práticas de programação em Java — mas também de linguagens Orientadas a Objetos(OO) em geral – são indicadas para desenvolvimento Android. Ele parte do princípio de que alguns desenvolvedores, já experientes com a linguagem, se deparam com problemas quando vão para o mundo Android, principalmente porque os dispositivos atingidos são mais limitados em recursos de memória e processamento. A pesquisa é de caráter experimental, usando como instrumento de análise um jogo de Batalha Naval, codificado primeiramente seguindo os padrões, e portado para Android e refatorando as partes consideradas críticas.

A melhor parte do artigo é a análise feita, inicialmente mostra o código original, que segue as convenções de OO, disserta sobre as vantagens e justificativas dessa abordagem. A medida que analisa, começa a mostrar porque pode haver problemas nela, principalmente com relação à memória. Um dos casos citados pelo autor é o da comparação de estruturas de dados a serem usadas. Em primeiro momento é usado Collections como `ArrayList`, `HashMap` ou `LinkedList`, para guardar dados. Mas por causa da limitação de memória, o código é refatorado para usar um array tradicional. O que é totalmente verdadeiro, uma collection oferece uma abstração e forma de manipular mais elegante, mas há um gasto maior na manipulação dos dados em comparação com um array.

O principal ponto fraco do artigo é o fato de que foi usado apenas 1 objeto de análise. Apesar de ser um jogo, algo que exige um gerenciamento melhor de memória, ou seja se adequando com a questão lançada pelo autor, ainda é fator que pode corresponder não a diversos outros casos. Portanto os pontos levantados tem a sua importância, mas as práticas ainda são totalmente possíveis de uso.

Uma peculiaridade desse artigo é que as soluções propostas, buscando resolver os problemas, acabam por ser uma abordagem mais procedural, ou seja, indo contra o padrão proposto por Java que é OO.

## 2. Anti-patterns and the energy efficiency of Android applications
O artigo analisa como o uso de *Anti-Patterns*("Contra Padrões", na melhor tradução) pode afetar a eficiência energética de um dispositivo Android. É definido dois tipos de AP: os *OO Anti-Patterns*([Blob][blob], [*Lazy Class*][lc], [Longa lista de parâmetros][lpl], [*Refused Bequest*][rb], [*Speculative Generality*][sg]) e os *Android Anti-Patterns*([Ligar Recursos muito Cedo][erb], uso de [HashMap][erb], *Getter* e *Setter* privados).

Após os testes foi visto como resultado que, em resumo, remover a Lazy Class, Refuse Bequest, Blob, *Binding Resources too early*, os getters e setters privados e o uso do HashMap podem melhorar a eficiência energética de um aplicativo Android (com a remoção dos últimos três AP fornecendo o maiores economias), mas, curiosamente, ao remover as longas listas de parâmetros e os anti-padrões de *Speculative Generality* podem deteriorar a eficiência energética do aplicativo.

A melhor parte desse artigo é a definição faz dos anti-patterns, e como refatorá-los. E, é claro, a prova que eles, em geral, atrapalham a performance de uma aplicação.

## O que eu tiro disso?
O primeiro ganho de ler esses artigos é conhecer como artigos da área são escritos, sua estrutura e abordagens do assunto. Mas o principal que tiro, desses em específico, são os conhecimentos em OO.

No primeiro artigo, ela está presente, e mesmo sendo colocada de forma implícita como a vilã da história pelo autor, tem bastante informação sobre OO. Já no segundo foi mais presente e foi bastante interessante ver os anti-patterns, porque evitá-los e como refatorar para deixar algo mais bem feito.

Além disso é importante ver que no Android deve-se ter outras preocupações que comumente não temos quando desenvolvemos para web, por exemplo, como o fato da memória, abordado no 1º artigo, e consumo de bateria, abordado no 2º. Portanto é algo que é preciso atenção pois além de prejudicar o aparelho, a médio e longo prazo, pode causar uma péssima experiencia para o usuário.

<br>
Portanto é isso. Pretendo continuar com esse formato, pois leio muito na internet e colocar o que entendi aqui me faz refletir melhor sobre o assunto e fixa-lo na memória. E quem sabe pego o hábito de ler artigos acadêmicos, muitos criticam que os de tecnologia ficam facilmente defasados, o que é compreensível, mas sempre há algo de interessante.

<!-- Links -->
[blob]: https://sourcemaking.com/antipatterns/the-blob
[lc]: https://refactoring.guru/smells/lazy-class
[lpl]: https://refactoring.guru/smells/long-parameter-list
[rb]: https://refactoring.guru/smells/refused-bequest
[sg]: https://sourcemaking.com/refactoring/smells/speculative-generality
[erb]: http://www.modelrefactoring.org/smell_catalog/smells/early_resource_binding.html
[hm]: https://developer.android.com/reference/android/util/SparseArray.html
