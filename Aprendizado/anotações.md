# Angular

## Diretivas
### Diretivas de Estilo
#### NgClass:
-   Diretiva angular que serve para colocar classe css em um elemento html
-   Usada pelo Angular para a manipulação do DOM com base em condições dinâmicas do JS
-   ngClass funciona com qualquer tipo de expressão:
    -   Booleanos (true / false)
    -   Operadores ternários (condição ? 'classeA' : 'classeB')
    -   Funções que retornam classes
    -   Objetos, arrays ou strings

##### Usabilidade:
1.  Atribuindo Classe:
-   Função básica de ngClass, serve parar adicionar class no html.
-   Adicionando class "container" em uma div
-   ![alt text](../src/img/image.png)

2. Atribuindo Classes com condições:

-  Usa condicional no próprio html para verificar se a classe será inserida ou  não.
-  Substitui os metodos de class.list (add/remove/toggle) em varivel de Js para manipular classes com eventos
-  ![alt text](../src/img/image2.png)

3. Atribuindo Classes com interpolação (Operador Ternário):

-  Usa Operador ternario, em sua estrutura básica.
-  Se condição for verdadeira, adiciona uma classe, caso contrário adiciona outra.
-  ![alt text](../src/img/image3.png)

4. Atribuido Classes com Função JS:
-   Se a lógica para decidir a classe for muito complexa, é melhor criar um método no componente
-  ![alt text](../src/img/image4.png)


#### NgStyle:
-   Permite a aplicação de estilos CSS de forma dinâmica a elementos HTML.
-   Aceita um objeto JavaScript, no qual as chaves representam propriedades CSS e os valores correspondem aos estilos aplicados

##### Sintaxe base:
-   <elemento [ngStyle]="{ 'propriedade-css': valor }"><elemento>

##### Usabilidade:
1. Adicionando Estilo Básico:
2. Adicionando Multiplos estilos:
3. Estilo Dinâmica com variaveis Js:
4. Adicionando Estilo condicional (Estrutura ternário)


### Diretiva Condicional
#### NgIf:
-   A diretiva estrutural *ngIf no Angular é utilizada para incluir ou remover elementos do DOM com base em uma condição booleana. Se a condição for avaliada como true, o elemento é renderizado; se for false, o elemento não é criado no DOM.
-   A nível de comparação, usando Js puro teríamos que usar os metodos de create.Element e appendChild

##### Sintaxe base:
-   <elemento *ngIf="condicao">Conteúdo</elemento>

##### Usabilidade:
1. Exemplo simples com variável booleana
2. Exemplo com expressão condicional
3. Uso com else (ng_template)
4. Uso com then e else (ng_template)

#### NgFor:
-  A diretiva estrutural *ngFor permite iterar sobre arrays ou listas e renderizar um elemento para cada item da coleção.
-  Ela é equivalente a um laço for do JavaScript, mas aplicado diretamente no template do Angular.

##### Sintaxe base:
-   <elemento *ngFor="let item of lista">{{ item }}</elemento>