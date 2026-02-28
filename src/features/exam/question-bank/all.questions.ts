import type { Question } from '../domain/types/exam.types';

export const questions: Question[] = [
  {
    "id": 1,
    "title": "El árbol genealógico de mi prima",
    "content": "Si mi prima es hija de la hermana de mi madre, ¿qué relación tiene conmigo la abuelita materna de la hija de mi prima?",
    "options": [
      "Tía",
      "Prima",
      "Madre",
      "Abuela"
    ],
    "correctAnswer": 0,
    "explanation": "En este ítem se requiere analizar la información dada para identificar las relaciones familiares. Una posible estrategia es construir un diagrama para organizar la información, como el siguiente:<div class=\"latex-centered\"><img src=\"./figuras/m_1.png\" alt=\"Diagrama Familiar\"></div>De acuerdo con el diagrama, la madre de mi prima es mi tía. Luego, la abuela de la hija de mi prima, es la madre de mi prima, quien es mi tía. Por lo tanto, la opción correcta es la 1.",
    "area": 1,
    "dificultad": 2,
    "peso": 34,
    "pista": "Construya un diagrama: identifique primero quién es la madre de la prima y luego determine quién es la abuela de la hija de la prima.",
    "estado": 1
  },
  {
    "id": 2,
    "title": "¿Qué se sabe con certeza?",
    "content": "Se tienen tres lapiceros X, Y y Z:  dos son verdes y uno es rojo; además, X y Y son de diferente color.Considere las siguientes proposiciones:<ol><li><strong>A.</strong> Y es verde.</li><li><strong>B.</strong> Z es verde.</li><li><strong>C.</strong> X es verde.</li></ol>De las anteriores, ¿cuáles se cumplen con certeza?",
    "options": [
      "Solo B",
      "Solo C",
      "B y C",
      "A y B"
    ],
    "correctAnswer": 0,
    "explanation": "Una posible estrategia para identificar las distintas posibilidades es organizar la información mediante tablas. De esta manera, se pueden construir los siguientes escenarios:<div class=\"latex-centered\"><span style=\"display:inline-block; width:1cm;\"></span><table class=\"latex-table\"><tr><td>Colores / Lapicero</td><td>X</td><td>Y</td><td>Z</td></tr><tr><td>Verde</td><td>✓</td><td></td><td>✓</td></tr><tr><td>Rojo</td><td></td><td>✓</td><td></td></tr></table><span style=\"display:inline-block; width:1cm;\"></span><div style=\"height:0.5cm;\"></div><table class=\"latex-table\"><tr><td>Colores / Lapicero</td><td>X</td><td>Y</td><td>Z</td></tr><tr><td>Verde</td><td></td><td>✓</td><td>✓</td></tr><tr><td>Rojo</td><td>✓</td><td></td><td></td></tr></table></div>Del análisis de los escenarios posibles, las proposiciones A y C no se pueden establecer con certeza y solo B ocurre en ambos. Por lo tanto, la opción correcta es la 1.",
    "area": 1,
    "dificultad": 3,
    "peso": 78,
    "pista": "Construya una tabla con todos los escenarios posibles. Si X y Y son de diferente color, ¿qué se sabe con seguridad sobre Z?",
    "estado": 1
  },
  {
    "id": 3,
    "title": "Relaciones entre cinco variables",
    "content": "Suponga que para cinco números representados por $V,W,X,Y$ y $Z$ se sabe que:<ul><li>$V$ es el doble de $W$ y a lo sumo tiene el valor de $Y$.</li><li>El valor de $X$ junto con el de $Z$ representan el valor de $W$.</li></ul>Considere las siguientes afirmaciones:<ol><li><strong>A.</strong> $Y$ es el doble de $W$.</li><li><strong>B.</strong> $Y$ es más que el doble de $X$.</li><li><strong>C.</strong> $Z$ es al menos la mitad de $W$.</li></ol>De las afirmaciones anteriores, ¿cuáles se cumplen con certeza?<br>",
    "options": [
      "A y B",
      "Solo C",
      "A y C",
      "Solo B"
    ],
    "correctAnswer": 3,
    "explanation": "Para facilitar el razonamiento, las premisas pueden expresarse mediante relaciones matemáticas:$$\\text{1. } V = 2W \\quad \\mbox{y} \\quad V \\leq Y$$  $$\\text{2. } X + Z = W$$  <br>Con estas expresiones, se analiza cada afirmación: <br><br><b>A. $Y$ es el doble de $W$.</b>  Según las premisas, \\( Y \\geq V = 2W \\), pero \\( Y \\) no necesariamente es igual a \\( 2W \\); puede ser mayor. Por lo tanto, esta afirmación no se cumple con certeza. <br><br><b>B. $Y$ es más que el doble de $X$.</b>  Reemplazando \\( W = X + Z \\) en \\( V = 2W \\), se obtiene:  $$V = 2(X + Z) = 2X + 2Z.$$  Dado que \\( V \\leq Y \\), se concluye que \\( Y \\geq 2X + 2Z \\). Por lo tanto, \\( Y \\) siempre será mayor que \\( 2X \\), y esta afirmación es correcta. <br><br><b>C. $Z$ es al menos la mitad de $W$.</b>  De \\( W = X + Z \\), no es posible determinar con certeza que \\( Z \\geq \\frac{W}{2} \\), ya que \\( Z \\) depende de \\( X \\), cuya relación específica no se establece en las premisas. Por lo tanto, esta afirmación no se cumple con certeza.  Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 1,
    "peso": 12,
    "pista": "Exprese las condiciones como ecuaciones. Sustituya W = X + Z en V = 2W para relacionar Y con X.",
    "estado": 1
  },
  {
    "id": 4,
    "title": "El misterio de los tres vecinos",
    "content": "Hay tres personas: Jorge, Lorena y Arturo que viven en provincias distintas: San José, Alajuela y Puntarenas, y tienen apellidos distintos: Berrocal, Castro y Soto.  Se sabe que:<br><br><ul><li>Jorge no vive en San José ni Lorena en Alajuela.</li><li>El que vive en Puntarenas es de apellido Soto.</li><li>El que vive en San José no es de apellido Berrocal.</li><li>Lorena no es de apellido Berrocal ni Castro.</li></ul>Con certeza, ¿dónde vive Arturo y cuál es su apellido?<br>",
    "options": [
      "Alajuela - Castro",
      "San José - Castro",
      "Puntarenas - Soto",
      "Alajuela - Berrocal"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem se requiere analizar la información dada para identificar el apellido y el lugar de residencia de las tres personas. Una posible estrategia es analizar por separado los datos proporcionados:<br><br><ul><li><b>Jorge no vive en San José.</b><br>Por lo tanto, Jorge debe vivir en Alajuela o Puntarenas.<br><br></li><li><b>Lorena no vive en Alajuela.</b><br>Esto implica que Lorena vive en San José o Puntarenas.<br><br></li><li><b>Lorena no es de apellido Berrocal ni Castro.</b><br>Por descarte, Lorena es de apellido Soto.</li><br><li><b>La persona que vive en Puntarenas tiene el apellido Soto.</b><br>Como Lorena es de apellido Soto, ella debe vivir en Puntarenas.</li><br><li><b>Jorge no vive en San José y Lorena vive en Puntarenas.</b><br> Esto significa que Jorge vive en Alajuela.</li><br><li><b>El que vive en San José no tiene el apellido Berrocal.</b><br>Así que tiene apellido Soto o Castro.</li></ul>Dado que Lorena es de apellido Soto y vive en Puntarenas, y Jorge vive en Alajuela, entonces Arturo vive en San José y su apellido es Castro. Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 2,
    "peso": 56,
    "pista": "Paso 1: ¿Qué apellido tiene Lorena? Paso 2: Si tiene ese apellido, ¿dónde vive? Paso 3: Descarte opciones para Jorge y Arturo.",
    "estado": 1
  },
  {
    "id": 5,
    "title": "El código del número cuadrado",
    "content": "Considere la siguiente información:<ul><li>Cada una de las letras $A$, $O$, $P$ y $Z$ representa una cifra del 0 al 9 distinta.</li><li>$Z=1$</li></ul>Con base en la información anterior, en la expresión<br><br><center>$$(ZO)^2=PAO$$</center><br><br>¿Cuál es el valor de $PA$?",
    "options": [
      "12",
      "22",
      "25",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "En este ítem se requiere analizar la información dada para identificar el valor de PA. Una posible estrategia es realizar pruebas con valores específicos para las letras. Por ejemplo, si $O=2$, tenemos:<center>$$\left(12\right)^2 = 144$$</center>Esto implica que $O=2$ y $O=4$, lo cual es imposible porque una misma letra no puede representar dígitos distintos. Ahora, probemos con $O=5$:<center>$$\left(15\right)^2 = 225$$</center>Esto satisface la igualdad, ya que $O=5$ aparece de forma consistente en ambos lados de la ecuación.<br> <br>Una vez realizado este descarte se tiene que los únicos valores posibles para $O$ son el 0, 1, 5 y 6:    <ul><li>Si $O=0$, entonces $\left(10\right)^2 = 100$, lo que implica $P=1$, $A=0$, $O=0$ y $Z=1$.</li><li>Si $O=1$, entonces $\left(11\right)^2 = 121$, lo que implica $P=1$, $A=2$, $O=1$ y $Z=1$.</li><li>Si $O=5$, entonces $\left(15\right)^2 = 225$, lo que implica $P=2$, $A=2$, $O=5$ y $Z=1$.</li><li>Si $O=6$, entonces $\left(16\right)^2 = 256$, lo que implica $P=2$, $A=5$, $O=6$ y $Z=1$.</li></ul>De estos casos, el único que cumple con la condición de que las letras diferentes representen cifras distintas es cuando $P=2$, $A=5$, $O=6$ y $Z=1$. Por lo que  el valor de $PA$ es $25$ y la opción correcta es la 3.",
    "area": 1,
    "dificultad": 3,
    "peso": 90,
    "pista": "Para que (1O)² termine en O, pruebe con dígitos que al elevarse al cuadrado conserven su cifra de las unidades. Solo hay cuatro opciones: 0, 1, 5 y 6.",
    "estado": 1
  },
  {
    "id": 6,
    "title": "DOS más TRES es CINCO",
    "content": "Considere las letras C, D, E, I, N, O, R, S, T que representan cifras del 0 al 9 y <b>cada letra representa una cifra distinta</b>. Si se sabe que:<br><br><ul><li>$S+S=D+R$</li><li>$C=1$</li><li>$T=9$</li></ul>y además:<center> <div class=\"tikz-visual-marker\"><img src=\"./figuras/m_6.png\" alt=\"Cálculo\"></div></center><br>Considere las siguientes proposiciones basadas en las condiciones anteriores:<ol>  <li><strong>A.</strong> Si $S=6$, entonces $N=3$</li><li><strong>B.</strong> Si $S=7$, entonces $N=5$ </li><li><strong>C.</strong> Si $S=8$, entonces $N=7$</li></ol>De las anteriores, ¿cuales son verdaderas?",
    "options": [
      "Solo A",
      "Solo B",
      "A y C",
      "B y C"
    ],
    "correctAnswer": 0,
    "explanation": "<p>En este ítem se requiere analizar la información dada para identificar la viabilidad de cada proposición, tomando en cuenta que cada letra representa un número diferente del 0 al 9. Para ello, se debe analizar cada posible valor para $S$. De esta manera:</p><br><ul><li>Para <span class=\"fbox\">$S=6$</span><br />Considere que $S+S=12$. A partir de ello, se puede determinar que $O=2$. Ahora bien, note que por hipótesis $C=1$, por lo que la suma $1 + 2 + E=11$ y así; $E=8$. Seguidamente, al ser $T=9$, se debe sumar una unidad para cumplir con $C=1$ al efectuar la operación $D+R$ que es igual a $12$. Observe el siguiente esquema con la información descrita:<div class=\"contenedor-zoom\"><img src=\"./figuras/suma1.png\" alt=\"Suma\" width=\"500\" height=\"500\" /></div><br />Note que la condición de $D+R=12$ se cumple para valores distintos entre sí; con respecto a las demás, por lo que se deben considerar aquellos valores para $D$ y $R$ que no hayan sido designados anteriormente. Para $D+R=12$ se tienen los siguientes casos:<ul><li>5 + 7 = 12</li><li>7 + 5 = 12</li></ul></li></ul><p style=\"padding-left: 40px;\">Por lo tanto, A es una proposición verdadera.</p><br><ul><li>Para <span class=\"fbox\">$S=7$</span><br />Con el mismo razonamiento, note que $S+S=14$. A partir de ello, se puede determinar que $O=4$. Ahora bien, note que por hipótesis $C=1$, por lo que la suma $1 + 4 + E=11$ y así; $E=6$. De igual manera, se sabe que $D+R$ es igual a $14$. Observe el siguiente esquema con la información descrita:</li></ul><p style=\"padding-left: 40px;\"><div class=\"contenedor-zoom\"><img src=\"./figuras/suma2.png\" alt=\"Suma\" /></div></p><p style=\"padding-left: 40px;\">Note que la condición de $D+R=14$ debe cumplirse para valores distintos entre s&iacute; con respecto a las demás, por lo que se deben considerar aquellos valores para $D$ y $R$ que no hayan sido designados anteriormente. Para $D+R=14$ no existen n&uacute;meros diferentes a los utilizados previamente que den como resultado 14.<br />Por lo que B es una proposición falsa.</p><br><ul><li>Para <span class=\"fbox\">$S=8$</span><br />Con el mismo razonamiento, note que $S+S=16$. A partir de ello, se puede determinar que $O=6$. Ahora bien, note que por hipótesis $C=1$, por lo que la suma $1 + 6 + E=11$ y así; $E=4$.De igual manera, se sabe que $D+R$ es igual a $16$. Observe el siguiente esquema con la información descrita:</li></ul><div style=\"padding-left: 40px;\"> <div class=\"contenedor-zoom\" style=\"padding-left: 40px;\"><img src=\"./figuras/suma3.png\" alt=\"Suma\" /></div></div><p style=\"padding-left: 40px;\">Note que la condición de $D+R=16$ debe cumplirse para valores distintos entre sí; con respecto a las demás, por lo que se deben considerar aquellos valores para $D$ y $R$ que no hayan sido designados anteriormente. Para $D+R=16$ no existen números diferentes a los utilizados previamente que den como resultado 16.<br />Por lo que C es una proposición falsa.</p><br><p>Por lo tanto, la opción correcta es la 1.</p><br><p>Una explicación alternativa es la siguiente: como $T=9$, entonces $I = 0$; además, como en cada caso se da el valor de $S$, es posible determinar el valor de $O$ y el de $N$. Por ejemplo, si $S=6$, entonces $O=2$ ($S+S=12$) y $N=3$ (una unidad más). También, al conocer $O$ y $C$ es posible determinar $E$ (pues $E+O =10$, para que al hacer la suma y llevar una unidad el resultado sea 11, ya que $C=1$). Con esta información se construye la siguiente tabla:</p><div style=\"text-align: center;\"><table class=\"latex-table\"><tbody><tr><th>Casos</th><th>$C$</th><th>$D$</th><th>$E$</th><th>$I$</th><th>$N$</th><th>$O$</th><th>$R$</th><th>$S$</th><th>$T$</th><th>$D+R=2S$</th></tr><tr><td>$S=6$</td><td>1</td><td>&nbsp;</td><td>8</td><td>0</td><td>3</td><td>2</td><td>&nbsp;</td><td>6</td><td>9</td><td>12</td></tr><tr><td>$S=7$</td><td>1</td><td>&nbsp;</td><td>6</td><td>0</td><td>5</td><td>4</td><td>&nbsp;</td><td>7</td><td>9</td><td>14</td></tr><tr><td>$S=8$</td><td>1</td><td>&nbsp;</td><td>4</td><td>0</td><td>7</td><td>6</td><td>&nbsp;</td><td>8</td><td>9</td><td>16</td></tr></tbody></table></div><p>Ahora los dígitos que faltan por asignar son:</p><div style=\"text-align: center;\"><table class=\"latex-table\"><tbody><tr><th>Casos</th><th>$C$</th><th>$D$</th><th>$E$</th><th>$I$</th><th>$N$</th><th>$O$</th><th>$R$</th><th>$S$</th><th>$T$</th><th>$D+R=2S$</th><th>D&iacute;gitos que faltan</th><th>$D+R$</th></tr><tr><td>$S=6$</td><td>1</td><td>&nbsp;</td><td>8</td><td>0</td><td>3</td><td>2</td><td>&nbsp;</td><td>6</td><td>9</td><td>12</td><td>4,5,7</td><td>7+5=12</td></tr><tr><td>$S=7$</td><td>1</td><td>&nbsp;</td><td>6</td><td>0</td><td>5</td><td>4</td><td>&nbsp;</td><td>7</td><td>9</td><td>14</td><td>2,3,8</td><td>No viable</td></tr><tr><td>$S=8$</td><td>1</td><td>&nbsp;</td><td>4</td><td>0</td><td>7</td><td>6</td><td>&nbsp;</td><td>8</td><td>9</td><td>16</td><td>2,3,4</td><td>No viable</td></tr></tbody></table></div><p>Solo en la opci&oacute;n A es posible que $D+R =2S$.</p>",
    "area": 1,
    "dificultad": 1,
    "peso": 23,
    "pista": "Paso 1: De S+S se deduce O y N. Paso 2: De E+O+1=10 se deduce E. Paso 3: Verifique si los dígitos restantes pueden sumar D+R=2S sin repetirse.",
    "estado": 1
  },
  {
    "id": 7,
    "title": "Ciervos, cuernos y rumiantes",
    "content": "Considere las siguientes premisas:<br><ul><li><b>Premisa 1:</b> Todos los ciervos tienen cuernos.</li><li><b>Premisa 2:</b> Algunos rumiantes son ciervos.</li></ul>De las premisas anteriores se sigue que",
    "options": [
      "algunos ciervos no son rumiantes.",
      "algunos rumiantes tienen cuernos.",
      "todos los rumiantes tienen cuernos.",
      "algunos rumiantes no tienen cuernos."
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem se requiere analizar la información dada por las premisas, que se puede ilustrar mediante un diagrama como el siguiente:<center><div class=\"contenedor-zoom22\"><img src=\"./figuras/m_7.png\" alt=\"Suma\"></div> </center>La premisa 1 denota que todos los ciervos tienen cuernos, pero la premisa 2 indica que de todos los rumiantes solo algunos son ciervos. De esta manera, según la información dada, solamente se puede concluir con certeza que algunos rumiantes tienen cuernos. Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 2,
    "peso": 67,
    "pista": "Dibuje un diagrama de Venn: coloque a los ciervos dentro de los que tienen cuernos. Ahora, ¿qué pasa con los rumiantes que son ciervos?",
    "estado": 1
  },
  {
    "id": 8,
    "title": "Conferencias, discursos y lecciones",
    "content": "Considere las siguientes premisas:<br><ul><li><b>Premisa 1:</b> Toda conferencia es discurso.</li><li><b>Premisa 2:</b> Algunas conferencias no son lecciones.</li></ul>De las premisas anteriores se sigue que",
    "options": [
      "ninguna lección es discurso.",
      "todas las lecciones son discursos.",
      "algunos discursos no son lecciones.",
      "todos los discursos son conferencias."
    ],
    "correctAnswer": 2,
    "explanation": "En este ítem se requiere analizar la información dada por las premisas, que se puede ilustrar mediante un diagrama como el siguiente:<center><div class=\"contenedor-zoom22\"><img src=\"./figuras/m_8.png\" alt=\"Diagrama\"></div></center><br>La premisa 1 denota que todas las conferencias son discursos y la premisa 2 indica que de todas las conferencias algunas no son lecciones (parte sombreada), pero no se puede asegurar que todas las lecciones sean discursos (parte blanca). De esta manera, según la información dada,  solamente se puede concluir con certeza que algunos discursos no son lecciones. Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 3,
    "peso": 45,
    "pista": "Dibuje un diagrama de Venn con los tres conjuntos. Si toda conferencia es discurso, ¿dónde están las conferencias que no son lecciones? Y esas, ¿son discursos?",
    "estado": 1
  },
  {
    "id": 9,
    "title": "Músicos y coleccionistas",
    "content": "Considere las siguientes premisas:<ul><li><b>Premisa 1:</b> Todos los músicos coleccionan carteles.</li><li><b>Premisa 2:</b> $P$ no es músico y $Q$ no colecciona carteles.</li></ul>Considere las siguientes afirmaciones:<br><br><li> <b style=\"color:var(--primary)\">A.</b>  $P$ no colecciona carteles.<li><b style=\"color:var(--primary)\">B.</b>  $Q$ no es músico.<li><b style=\"color:var(--primary)\">C.</b>  $P$ colecciona carteles.</ul><br><br>De las anteriores, ¿cuáles se cumplen con certeza?<br>",
    "options": [
      "Solo A",
      "Solo B",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem  se  requiere  analizar  la  información  dada por las premisas, lo cual se puede ilustrar mediante un diagrama como el siguiente:<center><div class=\"latex-centered\"><div class=\"contenedor-zoom22\"><img src=\"./figuras/m_9.png\" alt=\"Diagrama\"></div> </div>  La premisa 1 denota que todos los músicos coleccionan carteles, pero observe que pueden existir no músicos que también coleccionen carteles.  La premisa 2 indica que $P$ no es músico, por lo cual <b>no</b> se puede concluir con certeza si colecciona carteles o no. En el caso de $Q$, se cumple con certeza que, al no tener carteles, no es músico.  Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 1,
    "peso": 89,
    "pista": "No tener carteles impide ser músico, pero no ser músico no impide tener carteles.",
    "estado": 1
  },
  {
    "id": 10,
    "title": "Silogismo de acciones",
    "content": "Considere las siguientes premisas:<br><br><ul><li><b>Premisa 1:</b> Si V lee, entonces L dibuja o J salta.</li><li><b>Premisa 2:</b> Si L dibuja, entonces P no corre.</li><li><b>Premisa 3:</b> L no dibuja y J no salta.</li></ul>De las premisas anteriores se sigue que<br>",
    "options": [
      "V lee.",
      "P corre.",
      "V no lee.",
      "P no corre."
    ],
    "correctAnswer": 2,
    "explanation": "En este ítem se requiere concatenar las premisas, no necesariamente en el orden dado, para extraer una conclusión lógica. En este caso se puede empezar con la premisa 3 porque se puede separar en dos ideas, ambas ciertas. Según la premisa 3, como L no dibuja y tampoco J salta, entonces se deduce que V no lee, según la premisa 1.  Que L no dibuje no necesariamente significa que P corra, por lo que la premisa 2 no aporta ninguna conclusión válida.  Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 2,
    "peso": 33,
    "pista": "Comience con lo que sabe con certeza (Premisa 3). Si ni L dibuja ni J salta, ¿puede V estar leyendo según la Premisa 1?.",
    "estado": 1
  },
  {
    "id": 11,
    "title": "¿Quién es A?",
    "content": "Considere las siguientes premisas:<br><br><ul><li><b>Premisa 1:</b> Si $A$ es un muchacho, entonces $A$ es más joven que $J$.</li><li><b>Premisa 2:</b> Si $A$ no tiene 14 años, entonces $A$ no es más  joven que $J$.</li><li><b>Premisa 3:</b> $A$ no tiene 14 años.</li></ul><br>De las premisas anteriores se sigue que<br>",
    "options": [
      "A es menor que J.",
      "J es menor que A.",
      "J es un muchacho.",
      "A no es un muchacho."
    ],
    "correctAnswer": 3,
    "explanation": "En este ítem se requiere concatenar las premisas, no necesariamente en el orden dado, para extraer una conclusión lógica. En este caso una forma equivalente de escribir la premisa 1, es que si $A$ no es más joven que $J$  entonces $A$ no es muchacho. Con base en la premisa 3 se tiene con certeza que A no es más joven que $J$ y así $A$ no es un muchacho. Una explicación alternativa: de la premisa 3 se sabe que A no tiene 14 años, por lo tanto usando la premisa 2 se concluye que A no es más joven que J. Finalmente, de la premisa 1 se concluye que A no es un muchacho, pues de lo contrario A sería más joven que J. Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 3,
    "peso": 71,
    "pista": "De premisa 3 y 2, deduzca si A es más joven que J. Luego pregunte: si A no es más joven que J, ¿puede ser muchacho según premisa 1?",
    "estado": 1
  },
  {
    "id": 12,
    "title": "Conjuntos encadenados",
    "content": "Considere las siguientes premisas:<br><br><ul><li><b>Premisa 1:</b> Todo $C$ es $S$.</li><li><b>Premisa 2:</b> Ningún $E$ es $T$.</li><li><b>Premisa 3:</b> Todo $S$ es $T$.</li></ul><br>De las anteriores se sigue que<br>",
    "options": [
      "todo S es E.",
      "todo C no es E.",
      "algunos S  son E.",
      "algunos T son E."
    ],
    "correctAnswer": 1,
    "explanation": "Para este ítem se debe concatenar las premisas, no necesariamente en el orden dado. Según la premisa 1 todo $C$ es $S$ y como todo $S$ es $T$ se concluye que todo $C$ es $T$. Además, como en la premisa 2 se establece que ningún $E$ es $T$, y ya se sabe que todo $C$ es $T$, se concluye que todo $C$ no es $E$. Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 1,
    "peso": 19,
    "pista": "Conecte C con T a través de S (transitividad). Luego, si ningún E es T y todo C es T, ¿qué relación hay entre C y E?",
    "estado": 1
  },
  {
    "id": 13,
    "title": "Sumando cuadrados crecientes",
    "content": "Considere la siguiente secuencia:$$1,\\;5,\\;14,\\;30,\\;55,\\ldots$$ ¿Cuál es el sétimo término de esta secuencia?<br>",
    "options": [
      "79",
      "91",
      "104",
      "140"
    ],
    "correctAnswer": 3,
    "explanation": "<br> En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia. Una estrategia para identificar el patrón es la siguiente: <div class=\"latex-centered\"><br><div class=\"contenedor-zoom22\"><img src=\"./figuras/secuencia1.png\" alt=\"Secuencia1\"></div>  </div>De este modo, se tiene que $5=1+2^2$. Luego<div class=\"latex-centered\"><br><div class=\"contenedor-zoom22\"><img src=\"./figuras/secuencia2.png\" alt=\"secuencia2\"></div>  </div>Entonces, se tiene que $14=5+3^2$.<br><br>Según este patrón, se puede construir el siguiente esquema:<div class=\"latex-centered\"><br><br><div class=\"contenedor-zoom22\"><img src=\"./figuras/secuencia3.png\" alt=\"secuencia3\"></div>    </div><br>De esta manera, el sétimo término sería $91+(7)^{2}=140$. Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 2,
    "peso": 84,
    "pista": "Calcule las diferencias entre términos consecutivos. Observe que son cuadrados perfectos: 4, 9, 16, 25... ¿Cuál sigue?",
    "estado": 1
  },
  {
    "id": 14,
    "title": "Secuencia tipo Fibonacci",
    "content": "Considere la siguiente secuencia:$$-1, 1, 0, 1, 1, 2, 3, 5, p$$¿Cuál es el valor de $p$?<br>",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 3,
    "explanation": "En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia. Se puede empezar identificando que la suma de los dos primeros términos genera el tercero: $-1+1=0$. Luego, al sumar el segundo y el tercer término se obtiene el cuarto $1+0=1$. De esta manera se verifican los demás términos y al sumar los últimos dos se tiene que $p=5+3=8$. Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 3,
    "peso": 52,
    "pista": "Suma los dos números anteriores para obtener el valor de p.",
    "estado": 1
  },
  {
    "id": 15,
    "title": "Progresión aritmética algebraica",
    "content": "Considere la siguiente secuencia, donde $n$ es un número entero positivo:<BR><br><center><div \">$3n-1$, $3n+2$, $3n+x$, $3n+8$,...</div></center><div>¿Cuál es el valor de $x$?</div>",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia. Es importante destacar que la expresión $3n$ es constante en todos los términos, por lo que se puede reescribir de la siguiente manera:  $$-1, 2, x, 8, ...$$Una estrategia para identificar el patrón es la siguiente: <div class=\"latex-centered\">  <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/explicacion_15_1.png\" alt=\"Explicacion_15_1\"></div>  </div>Siguiendo el mismo razonamiento, se puede plantear que: <div class=\"latex-centered\">  <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/explicacion_15_2.png\" alt=\"Explicacion_15_2\"></div>  </div>Luego, se podría asumir que $x= 2+3 = 5$.<br><br>Finalmente, se verifica el patrón con el siguiente término de la sucesión:<div class=\"latex-centered\"><div class=\"contenedor-zoom22\"><img src=\"./figuras/explicacion_15_3.png\" alt=\"Explicacion_15_3\"></div></div>Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 1,
    "peso": 63,
    "pista": "Observe que 3n es común en todos los términos.  Analice la secuencia: -1, 2, x, 8. ¿Cuál es la diferencia constante?",
    "estado": 1
  },
  {
    "id": 16,
    "title": "Dos secuencias, dos patrones",
    "content": "Considere la siguiente secuencia de pares ordenados:<br>$$\\left(1,2 \\right),  \\; \\left(3,8 \\right), \\; \\left(7,26 \\right),  \\; \\left(b,80 \\right),  \\; \\left(31,a \\right),  \\;  \\left(63,728 \\right), \\; \\cdots $$<br>¿Cuál es el valor de $a+b$?<br>",
    "options": [
      "255",
      "256",
      "257",
      "258"
    ],
    "correctAnswer": 2,
    "explanation": "<br> En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia, tanto para los primeros como los segundos elementos de cada par ordenado. Note que el conjunto de los primeros elementos está dado por: $$M=\\{1,\\;3,\\;7,\\;b,\\;31,\\;63,...\\}$$ Y el conjunto para los segundos elementos es: $$N=\\{2,\\;8,\\;26,\\;80,\\;a,\\;728,...\\}$$  En ambos conjuntos se observa un incremento no constante entre cada elemento, es decir, no se aumenta un mismo valor para determinar cada uno de ellos. <br> <br> Para el conjunto $M$, note que la diferencia entre los elementos se incrementa en múltiplos de 2, lo cual indica que cada uno tiene la forma $2^n- 1$ con $n$ la posición de cada elemento. <div class=\"latex-centered\"><br><br><div class=\"contenedor-zoom22\"><img src=\"./figuras/explicacion_16_1.png\" alt=\"Explicacion_16_1\"></div></div>En tal caso, como $b$  está en la cuarta posición se tiene que $n=4$  con lo cual$$b=2^4-1=16-1=15$$Para el conjunto $N$, note que la diferencia entre los elementos se incrementa en múltiplos de 3, lo cual significa que cada elemento tiene la forma $3^n- 1$ con $n$ la posición de cada elemento:<div class=\"latex-centered\"><br><br><div class=\"contenedor-zoom22\"><img src=\"./figuras/explicacion_16_2.png\" alt=\"Explicacion_16_2\"></div></div>En tal caso, como $a$  está en la quinta posición se tiene que $n=5$  con lo cual$$a=3^5-1=243-1=242$$De esta forma, el valor de $a+b=242+15=257$. Por lo tanto, la opción correcta es la 3. <br>",
    "area": 1,
    "dificultad": 2,
    "peso": 27,
    "pista": "Analice los primeros y segundos elementos de los pares por separado. En cada conjunto, calcule las diferencias entre términos: ¿crecen sumando o multiplicando?",
    "estado": 1
  },
  {
    "id": 17,
    "title": "Patrones en fracciones algebraicas",
    "content": "Considere la siguiente secuencia:<br>$$\\displaystyle{\\frac{1}{n^2+1}},\\displaystyle{\\frac{3}{n^4+2}}, \\displaystyle{\\frac{5}{n^6+3}}, \\; \\ldots$$ <br>¿Cuál es la expresión que continúa la secuencia?<br>",
    "options": [
      "$\\dfrac{7}{n^8+3}$",
      "$\\dfrac{6}{n^8+3}$",
      "$\\dfrac{7}{n^8+4}$",
      "$\\dfrac{7}{n^8+5}$"
    ],
    "correctAnswer": 2,
    "explanation": "En este ítem se requiere identificar el patrón que permite construir cada término de la secuencia. Una estrategia es analizar el patrón del numerador y del denominador por separado.  Se tiene que el valor del numerador aumenta en dos unidades, mientras que en el denominador, el exponente de $n$ del primer sumando también aumenta en dos unidades y cada valor del segundo sumando aumenta en una unidad. Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 3,
    "peso": 95,
    "pista": "Analice por separado el patrón del numerador y del denominador. En el denominador, considere el exponente de n y el término constante de manera independiente.",
    "estado": 1
  },
  {
    "id": 18,
    "title": "Fracciones con patrones cruzados",
    "content": "Considere la siguiente secuencia:$$\\dfrac{1}{1}\\, , \\dfrac{2}{1+3}\\, , \\dfrac{6}{1+3+5}\\, , \\dfrac{x}{w}\\, , \\dfrac{z}{y}$$ ¿Cuál es el valor de $z+y$?",
    "options": [
      "$40$",
      "$46$",
      "$47$",
      "$56$"
    ],
    "correctAnswer": 3,
    "explanation": "En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia, tanto para los numeradores como  para los denominadores de cada fracción.<br>Observe que el conjunto de los numeradores está dado por:$$N= \\left\\{ 1,\\;2,\\;6,\\;x,\\;z,... \\right\\}$$Por su parte, el conjunto de los denominadores está dado por:$$D= \\left\\{ 1,\\;1+3,\\;1+3+5,\\;w,\\;y,... \\right\\}$$Note que el patrón en el conjunto de los denominadores consiste en sumar el siguiente número impar, por lo que:$$w=1+3+5+7$$$$y=1+3+5+7+9=25$$En el caso de los  numeradores, estos se construyen sumando el numerador y   denominador de la fracción anterior, por lo que:$$1+1=2$$$$2+(1+3)=6$$$$x=6+(1+3+5)=15$$$$z=15+(1+3+5+7)=31$$Así que la suma solicitada es$$ z+y=31+25=56$$Por tanto, la opción correcta es la 4.<br>",
    "area": 1,
    "dificultad": 1,
    "peso": 41,
    "pista": "Analice por separado los numeradores {1, 2, 6, x, z} y los denominadores {1, 4, 9, w, y}. En los denominadores, observe que son sumas de números impares consecutivos",
    "estado": 1
  },
  {
    "id": 19,
    "title": "El triángulo de los dos vecinos",
    "content": "Analice el siguiente patrón:<br><div class=\"latex-centered\">1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 5<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 9<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 7 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br></div><br>Si se continúa con el mismo patrón, ¿en cuál  fila la suma de sus números sobrepasa por primera vez 96?<br> <br>",
    "options": [
      "Sétima",
      "Octava",
      "Novena",
      "Décima"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem se debe identificar el patrón que se sigue para construir cada fila. De esta manera, se tiene que cada término es la suma de los dos elementos inmediatamente superiores de la fila anterior. Por ejemplo, el 9 de la fila 5 es la suma de 4 y 5 de la fila cuatro. El mismo razonamiento aplica en las filas siguientes, por lo tanto, se deben construir las filas necesarias para verificar que la suma de sus elementos sobrepase por primera vez 96, como se comprueba en la siguiente figura:<div class=\"latex-centered\">1<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 3<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>6<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 5<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>12<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 9<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 7 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>24<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 6 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 14<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 16 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 9<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>2=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>48<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 7 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 20<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 30 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 25<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>11<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>2=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>96<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 8 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 27<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 50 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 55<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>36<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>13+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>2=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>192<br></div>Por lo tanto, la opción correcta es la 2.<br>",
    "area": 1,
    "dificultad": 2,
    "peso": 88,
    "pista": "Cada número interior de una fila se obtiene sumando los dos números de la fila anterior que están inmediatamente arriba. Construya las filas que siguen y calcule la suma de cada una.",
    "estado": 1
  },
  {
    "id": 20,
    "title": "El triángulo y sus vecinos",
    "content": "Considere el siguiente patrón:<div class=\"latex-centered\">1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 6<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br></div><br>A este patrón se le pueden seguir agregando filas. Cada número interior del triángulo está rodeado por otros 6 números. Por ejemplo, 4 está rodeado por $1,1,3,6,10$ y 5.<br><br>Considere las siguientes afirmaciones:<br><br><li><b style=\"color:var(--primary)\">A.</b>  El número 50 estará en la fila 49.<li><b style=\"color:var(--primary)\">B.</b> Hay un número rodeado solo de números impares. <li><b style=\"color:var(--primary)\">C.</b>  El 28 está dentro del grupo de números que rodea al 7.<br><br>De las anteriores, ¿cuáles se cumplen con certeza?<br>",
    "options": [
      "A y B",
      "B y C",
      "Solo B",
      "Solo C"
    ],
    "correctAnswer": 1,
    "explanation": "En la resolución de este ítem es importante empezar por el análisis de la veracidad de cada afirmación por separado.<br><br><ul class=\"latex-itemize\"><li>La afirmación A es falsa. Tome en cuenta que en una misma fila no se encuentra el valor del número de fila y su consecutivo, ya que cada término es la suma de los dos elementos inmediatamente superiores de la fila anterior. Por ejemplo, el 10 de la fila 6 es la suma del 6 y el 4 de la fila cinco.</li><br><br><li>La afirmación B es verdadera. Se puede notar que el 2 está rodeado por 1, 1, 1, 3, 3, 1.</li><br><br><li>La afirmación C es verdadera. Al agregar las filas 7, 8 y 9 se comprueba.</li></ul>    <div class=\"latex-centered\">1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 6<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 6 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 15<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 20 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 15 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 6 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <span class=\"fbox\">7</span> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 21<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 35 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 35 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 21 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <span class=\"fbox\">7</span> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 8 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <b>28</b> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 56 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 70 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 56 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <b>28</b> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 8 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br><br></div> Por lo tanto, la opción correcta es la 2.<br>",
    "area": 1,
    "dificultad": 3,
    "peso": 14,
    "pista": "Analice cada afirmación por separado. Para A, identifique qué valores aparecen en la segunda columna del triángulo. Para B, examine los vecinos del 2. Para C, construya el triángulo hasta la fila 9.",
    "estado": 1
  },
  {
    "id": 21,
    "title": "El último dígito de una potencia",
    "content": "¿Cuál es el último dígito del número $2545\\cdot5^{117}+1$?<br>",
    "options": [
      "0",
      "1",
      "5",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "Para la resolución de este ítem, se debe tener en cuenta que en cualquier potencia de base cinco el último dígito es 5, ya que al multiplicar números terminados en cinco, el producto también terminará en 5. $$5^1=\\underline{5}$$$$5^2=2\\underline{5}$$$$5^3=12\\underline{5}$$$$\\vdots$$$$5^{117}=\\ldots\\underline{5}$$ Entonces, $5^{117}$ terminará en 5, al igual que $2545\\cdot5^{117}$, por lo que al sumarle el 1 se tiene que la última cifra será 6. Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 1,
    "peso": 76,
    "pista": "Calcule los primeros valores de 5^n y observe el patrón del último dígito. Luego aplique ese resultado a la expresión completa.",
    "estado": 1
  },
  {
    "id": 22,
    "title": "Conversión de medidas en cocina",
    "content": "Considere las siguientes equivalencias:<div class=\"latex-centered\">10 tazas de agua= 2000 ml<br>16 cucharadas de agua= 200 ml<br></div>¿Cuántas tazas se obtienen de 240 cucharadas de agua?<br>",
    "options": [
      "15",
      "24",
      "30",
      "48"
    ],
    "correctAnswer": 0,
    "explanation": "En este ítem se debe interpretar las equivalencias dadas para resolverlo. De la primera equivalencia se deduce que una taza de agua tiene 200 ml, lo que es equivalente a 16 cucharadas. De la segunda equivalencia, 240 cucharadas de agua equivalen a 15 veces 200 ml, por lo que se obtienen 15 tazas de agua. Por lo tanto, la opción correcta es la 1.",
    "area": 1,
    "dificultad": 2,
    "peso": 39,
    "pista": "Deduzca cuántos mililitros tiene una taza y cuántas cucharadas equivalen a una taza. Luego aplique esa relación a 240 cucharadas.",
    "estado": 1
  },
  {
    "id": 23,
    "title": "Proporciones en una encuesta",
    "content": "Después de hacer una encuesta en la población A, conformada por 425 mujeres y 325 hombres, se obtiene la siguiente información:<div class=\"latex-centered\"><table class=\"latex-table\"><tr><td><b>Tipo de población</b></td><td><b>Total</b></td></tr><tr><td>Niños en escuela</td><td>225</td></tr><tr><td>Jóvenes en el colegio</td><td>175</td></tr><tr><td>Adultos menores de 65 años</td><td>250</td></tr><tr><td>Adultos mayores de 65 años</td><td>100</td></tr></table></div><br>Considere las siguientes afirmaciones:<li><br><b style=\"color:var(--primary)\">A.</b>  De cada 75 adultos mayores, 13 son mujeres.<li><b style=\"color:var(--primary)\">B.</b>  Por cada 7 colegiales hay 9 escolares.<li><b style=\"color:var(--primary)\">C.</b>  De cada 30 escolares, 13 son hombres.<br><br>De las afirmaciones anteriores, ¿cuáles se cumplen con certeza?",
    "options": [
      "Solo B",
      "Solo C",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 0,
    "explanation": "En este ítem se debe relacionar la información de la tabla con las tres afirmaciones. Un primer paso es calcular las siguientes proporciones:  $$\\dfrac{\\mbox{mujeres}}{\\mbox{total de encuestados}}=\\frac{425}{750}=\\frac{17}{30}$$<br>$$\\dfrac{\\mbox{hombres}}{\\mbox{total de encuestados}}=\\frac{325}{750}=\\frac{13}{30}$$<br>Con estos datos se descartan las afirmaciones $A$ y $C$, pues no hay certeza de que la proporción entre hombres y mujeres sea constante en cada uno de los subgrupos. Luego hay que calcular la proporción entre colegiales y escolares (indiferente del género), que sería: $$\\dfrac{\\mbox{colegiales}}{\\mbox{escolares}}=\\dfrac{175}{225} = \\dfrac{7}{9}$$ Con este resultado se comprueba que la afirmación $B$ es verdadera (por cada 7 colegiales hay 9 escolares). Por lo tanto, la opción correcta es la 1.",
    "area": 1,
    "dificultad": 3,
    "peso": 58,
    "pista": "Calcule la proporción entre colegiales y escolares directamente de la tabla. Para A y C, reflexione si la proporción global de género se puede asumir igual en cada subgrupo.",
    "estado": 1
  },
  {
    "id": 24,
    "title": "El mayor peso posible",
    "content": "Una empresa dispone de tres contenedores con capacidad para 90 kg, 180 kg y 150 kg, respectivamente. En cada uno se colocan frijoles empacados en sacos con el mayor peso posible y con igual  peso en los tres contenedores. ¿Cuántos kilogramos debe pesar cada saco de frijoles?",
    "options": [
      "15",
      "30",
      "45",
      "90"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem es necesario calcular el peso de los sacos de frijoles. Una manera es determinar los divisores de 90, 150 y 180 kilogramos para obtener el máximo divisor común, entonces se tiene que<br><br><center>Divisores de 90= <b>1</b>, <b>2</b>, <b>3</b>, <b>5</b>, <b>6</b>, 9, <b>10</b>, <b>15</b>, 18,<b><u>30</u></b>, 45, 90<br><br>Divisores de 150= <b>1</b>, <b>2</b>, <b>3</b>, <b>5</b>, <b>6</b>, <b>10</b>, <b>15</b>, 25, <b><u>30</u></b>, 50, 75, 150<br><br>Divisores de 180= <b>1</b>,  <b>2</b>,  <b>3</b>,  4,  <b>5</b>,  <b>6</b>,  9,  <b>10</b>,  12,  <b>15</b>,  18,  20,  <b><u>30</u></b>,  36,  45,  60,  90,  180</center><br>Así, se encuentra que el máximo común divisor en los tres contenedores es 30, entonces, se deben empacar los frijoles en sacos de 30 kilogramos para cumplir con las condiciones de máximo posible y el mismo peso. Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 1,
    "peso": 81,
    "pista": "Busque el número más grande que divida exactamente a los tres valores: 90, 150 y 180. Ese número es el máximo común divisor.",
    "estado": 1
  },
  {
    "id": 25,
    "title": "Coincidencia de timbres",
    "content": "Una fábrica de una zona industrial tiene tres timbres para la realización de diferentes procesos. Uno suena cada hora y cuarto, el segundo cada hora y veinte, el tercero cada hora y media.  Si los tres suenan simultáneamente a las 10 de la mañana del domingo, ¿cuándo es la próxima vez que volverá a suceder?",
    "options": [
      "A las 10 de la noche del lunes",
      "A las 10 de la noche del martes",
      "A las 10 de la mañana del jueves",
      "A las 10 de la mañana del miércoles"
    ],
    "correctAnswer": 1,
    "explanation": "Convierta los intervalos a minutos y calcule el mínimo común múltiplo de los tres valores. Ese resultado indica cuántos minutos después volverán a coincidir.",
    "area": 1,
    "dificultad": 2,
    "peso": 22,
    "pista": "",
    "estado": 1
  },
  {
    "id": 26,
    "title": "Problema de edades",
    "content": "Si hace 5 años la persona P tenía el cuádruplo de la edad de la persona Z y dentro de 5 años tendrá el doble de la edad de Z, ¿cuántos años tiene P?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "correctAnswer": 2,
    "explanation": "Defina variables para las edades actuales de P y Z. Traduzca cada condición del enunciado a una ecuación y resuelva el sistema resultante.",
    "area": 1,
    "dificultad": 3,
    "peso": 65,
    "pista": "",
    "estado": 1
  },
  {
    "id": 27,
    "title": "Tabla de torneo incompleta",
    "content": "En un torneo participan 6 jugadores: $X,Y,Z,D,E$ y $F$ y cada uno se enfrenta a los demás. Se asignan tres puntos por cada gane y un punto por cada empate. Gana quien obtenga el mayor puntaje. En caso de empate se disputa otra ronda entre los jugadores empatados para obtener un vencedor.La tabla final de resultados tiene la siguiente información:<div class=\"latex-centered\">  <table class=\"latex-table\"><tbody><tr><td></td><td>Ganados</td><td>Empatados</td><td>Perdidos</td><td>Puntos totales</td></tr><tr><td>X</td><td>2</td><td></td><td>2</td><td></td></tr><tr><td>Y</td><td></td><td>1</td><td></td><td>10</td></tr><tr><td>Z</td><td></td><td></td><td>2</td><td>5</td></tr><tr><td>D</td><td>2</td><td>1</td><td></td><td></td></tr><tr><td>E</td><td></td><td></td><td></td><td>3</td></tr><tr><td>F</td><td></td><td>3</td><td>0</td><td></td></tr></tbody></table></div>Considere las siguientes afirmaciones:<ul style=\"margin-left:25px;\"><br><b>A.</b> $D$ perdió contra $X$.<b><br>B.</b> Hay dos jugadores que empatan en puntaje.<b><br>C.</b> Si $F$ hubiera ganado un partido más, habría ganado el torneo.</ul>De las anteriores, ¿cuáles se cumplen con certeza?",
    "options": [
      "Solo A",
      "Solo B",
      "A y C",
      "B y C"
    ],
    "correctAnswer": 1,
    "explanation": "Complete la tabla usando que cada jugador participó en 5 partidos y que los puntos se calculan como 3×Ganados + 1×Empatados. Verifique cada afirmación con la tabla completa.",
    "area": 1,
    "dificultad": 1,
    "peso": 43,
    "pista": "",
    "estado": 1
  },
  {
    "id": 28,
    "title": "Conteo de productos distintos",
    "content": "¿Cuántos productos distintos se pueden obtener al multiplicar dos de los siguientes números: 3, 5, 6, 7 y 9 sin repetirlos?",
    "options": [
      "9",
      "10",
      "20",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "Organice los pares posibles en una tabla o lista. Recuerde que 3 por 5 y 5 por 3 dan el mismo producto, por lo que se cuenta una sola vez.",
    "area": 1,
    "dificultad": 2,
    "peso": 97,
    "pista": "La respuesta correcta debe extraerse directamente del texto, no de tu opinión.",
    "estado": 1
  },
  {
    "id": 29,
    "title": "S al inicio, A al final",
    "content": "¿Cuántos diferentes ordenamientos de cuatro letras se pueden hacer con M, S, R, A, O de modo que cada uno comience en S y termine en A?",
    "options": [
      "9",
      "10",
      "20",
      "25"
    ],
    "correctAnswer": 3,
    "explanation": "Las posiciones primera y última están fijas (S y A). Para cada una de las dos posiciones intermedias, cuente cuántas opciones hay. El enunciado no prohíbe repetir letras.",
    "area": 1,
    "dificultad": 3,
    "peso": 29,
    "pista": "Analiza qué sucede en las decenas cuando se pide prestado a las centenas.",
    "estado": 1
  },
  {
    "id": 30,
    "title": "Conteo con dígitos distintos",
    "content": "¿Cuántos números de cuatro cifras se pueden formar de manera que el dígito de las unidades sea $0$ y los otros sean tres dígitos del 1 al 7, distintos entre sí?",
    "options": [
      "18",
      "120",
      "210",
      "216"
    ],
    "correctAnswer": 2,
    "explanation": "La cifra de las unidades es 0. Para las otras tres posiciones, cuente cuántas opciones hay en cada una, considerando que no se pueden repetir dígitos. Multiplique las cantidades.",
    "area": 1,
    "dificultad": 1,
    "peso": 70,
    "pista": "Sigue el movimiento de una cara específica (ej. la cara con el punto).",
    "estado": 1
  },
  {
    "id": 31,
    "title": "Combinando unos y sietes",
    "content": "¿Cuántos números de tres cifras se pueden formar utilizando solamente el 1 y el 7?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 3,
    "explanation": "Para cada una de las tres posiciones, cuente cuántas opciones hay. Como se permite repetir, multiplique las cantidades.",
    "area": 1,
    "dificultad": 2,
    "peso": 54,
    "pista": "Iguala ambas expresiones para despejar la variable que falta.",
    "estado": 1
  },
  {
    "id": 32,
    "title": "Conteo de películas",
    "content": "En una colección de películas, 9 son de comedia y 7 son de terror. Considere las siguientes afirmaciones:<br><br><li><b>A</b>. La cantidad de maneras para elegir dos películas, sin importar el orden es 120.</li><li><b>B.</b> La cantidad de maneras para elegir dos películas de comedia es 81.</li><li><b>C.</b> La cantidad de maneras para elegir dos películas, primero de comedia y luego de terror, es 63.</li></ul><br> De acuerdo con lo anterior, ¿cuál de las afirmaciones anteriores se cumple con certeza?",
    "options": [
      "Solo A",
      "A y B",
      "B y C",
      "A y C"
    ],
    "correctAnswer": 3,
    "explanation": "Para cada afirmación, identifique si el orden importa. Si no importa, divida entre 2 después de multiplicar. Verifique los cálculos: A usa 16 películas, B usa 9, C usa 9 y 7.",
    "area": 1,
    "dificultad": 3,
    "peso": 18,
    "pista": "Usa una tabla de doble entrada para marcar certezas y descartar opciones.",
    "estado": 1
  },
  {
    "id": 33,
    "title": "Impares consecutivos",
    "content": "Si $k$ es un número natural, ¿cuáles expresiones representan dos números naturales impares consecutivos?",
    "options": [
      "$2k-1$ y $2k$",
      "$2k-1$ y $2k+3$",
      "$2k+1$ y $2k+3$",
      "$2k+1$ y $2k+2$"
    ],
    "correctAnswer": 2,
    "explanation": "Verifique que ambas expresiones generen números impares. Luego calcule la diferencia entre ellas: los impares consecutivos difieren exactamente en 2.",
    "area": 1,
    "dificultad": 1,
    "peso": 86,
    "pista": "Verifica cuántos espacios del abecedario se saltan entre cada término.",
    "estado": 1
  },
  {
    "id": 34,
    "title": "Operaciones especiales",
    "content": "En el conjunto de los números reales se define la operación $ \\odot $, que cumple las siguientes condiciones:<ul style=\"margin-left:45px; margin-bottom:15px;\"><br><li> $m \\odot  -1=m$</li><li>$2 \\odot  -2=1$</li></ul>De acuerdo con lo anterior, ¿cuál es una posible fórmula para definir la operación $ \\odot $?",
    "options": [
      "$a\\odot b=2a+ab$",
      "$a\\odot b=a+b+1$",
      "$a\\odot b=a-b-3$",
      "$a\\odot b=a+2b+2$"
    ],
    "correctAnswer": 1,
    "explanation": "Sustituya en cada fórmula los valores de las dos condiciones dadas. Identifique cuál fórmula satisface ambas condiciones simultáneamente.",
    "area": 1,
    "dificultad": 2,
    "peso": 37,
    "pista": "Si el lado de un cuadrado se duplica, su área se cuadruplica.",
    "estado": 1
  },
  {
    "id": 35,
    "title": "¿Cuándo n^p es impar?",
    "content": "Se requiere que $n^p$ siempre sea un número impar, con $n$ y $p$ naturales distintos de cero.<br><br>  Considere las siguientes afirmaciones:<ul class=\"latex-list\"><br><b>A.</b> <span>$n$ tiene que ser un número par siempre que $p$ sea impar.</span><b><br>B.</b> <span>$n$ puede ser cualquier número natural siempre que $p$ sea impar.<b><br>C.</b> $p$ tiene que ser un número impar y $n$ puede ser un número impar.<b><br>D.</b> $p$ puede ser cualquier número natural siempre que $n$ sea impar.</ul>De las anteriores, ¿cuáles son verdaderas?",
    "options": [
      "Solo B",
      "Solo C",
      "C y D",
      "A y B"
    ],
    "correctAnswer": 2,
    "explanation": "Recuerde la regla: un número impar elevado a cualquier potencia siempre da impar, pero un número par elevado a cualquier potencia siempre da par. Analice cada afirmación con esta regla.",
    "area": 1,
    "dificultad": 3,
    "peso": 92,
    "pista": "La negación de 'Todos son' siempre empieza con 'Al menos uno no es'.",
    "estado": 1
  },
  {
    "id": 36,
    "title": "Sistema de numeración simbólico",
    "content": "Considere un sistema de numeración en el cual se tiene los siguientes símbolos con su respectivo valor numérico en el sistema decimal:<br><center><img src=\"./figuras/pregunta36.png\"alt=\"Simbolos\"></center>Por ejemplo, los números 13, 60 y 500 quedan representados de la siguiente manera:<br><br><center><img src=\"./figuras/pregunta36_b.png\"alt=\"Simbolos\"></center><br>¿Cuál número corresponde a la diferencia entre   $\\Gamma^HH\\Delta\\Gamma$  y  $HH\\Gamma^\\Delta\\Delta\\Delta||$?",
    "options": [
      "272",
      "343",
      "615",
      "887"
    ],
    "correctAnswer": 1,
    "explanation": "Interprete las reglas del sistema a partir de los ejemplos: símbolos al mismo nivel se suman, el exponente indica multiplicación. Convierta ambas expresiones a números decimales y luego reste.",
    "area": 1,
    "dificultad": 1,
    "peso": 48,
    "pista": "Suma las posibilidades de llegada a cada punto intermedio del diagrama.",
    "estado": 1
  },
  {
    "id": 37,
    "title": "Traducción de expresiones algebraicas",
    "content": "Se sabe que el producto de dos números naturales $A$ y $B$ es $S$. ¿Cuál expresión representa A aumentado en 2 unidades multiplicado por $B$?",
    "options": [
      "$S+2$",
      "$S+B$",
      "$S+2A$",
      "$S+2B$"
    ],
    "correctAnswer": 3,
    "explanation": "Escriba algebraicamente 'A aumentado en 2 unidades' y luego multiplique por B. Aplique la propiedad distributiva y sustituya A×B por S.",
    "area": 1,
    "dificultad": 2,
    "peso": 25,
    "pista": "AAplica los descuentos uno por uno sobre el valor restante del producto.",
    "estado": 1
  },
  {
    "id": 38,
    "title": "Números habilidosos",
    "content": "Se le llama número habilidoso a un número de tres dígitos que es múltiplo de 4 y divisible por 7. ¿Cuál es la última cifra del menor y la última cifra del mayor número habilidoso?",
    "options": [
      "2 y 0",
      "8 y 5",
      "0 y 6",
      "2 y 6"
    ],
    "correctAnswer": 0,
    "explanation": "Identifique que un número múltiplo de 4 y divisible por 7 es múltiplo de 28. Determinar cuál es el menor y el mayor múltiplo de 28 con exactamente tres dígitos",
    "area": 1,
    "dificultad": 3,
    "peso": 60,
    "pista": "Supón que el primero miente y verifica si eso contradice los demás datos.",
    "estado": 1
  },
  {
    "id": 39,
    "title": "Orden en una operación definida",
    "content": "Sobre el conjunto $A = \\{1, 2, 3, 4\\}$, se define la operación $\\oplus$ por medio de lasiguiente tabla:<center><table style=\"border-collapse:collapse; margin:15px auto; width:100%; border:1px solid #ccc;\"><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">$\\oplus$</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">4</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td></tr></table></center>Así, por ejemplo, se puede observar que $3 \\oplus 4 ={3}$ <br><br><center><img src=\"./figuras/pregunta39.png\"alt=\"SimbolosOtros\"></center><br>Se define el orden de un número como la cantidad de veces que se opera consigo mismo  hasta obtener  1. En tal caso, el 2 y 4 no tienen orden, ya que la operación con ellos mismos nunca dará uno.  ¿Cuál es el orden de 3?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "Opere 3⊕3 usando la tabla. Con el resultado, opere nuevamente con 3 (resultado⊕3). Repita hasta obtener 1. Cuente cuántas operaciones se realizaron.",
    "area": 1,
    "dificultad": 1,
    "peso": 73,
    "pista": "Establece la relación: ¿el primer objeto es una herramienta del segundo?",
    "estado": 1
  },
  {
    "id": 40,
    "title": "Círculos, diagonal y rectángulo",
    "content": "Considere la siguiente figura:<br><center><img src=\"./figuras/secuenciabuena.png\"alt=\"secuenciabuena\"></center><br><br>¿Cuál opción corresponde a la cuarta fila?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/secuenciabuena1.png\"alt=\"secuenciabuena1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/secuenciabuena2.png\"alt=\"secuenciabuena2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/secuenciabuena3.png\"alt=\"secuenciabuena3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/secuenciabuena4.png\"alt=\"secuenciabuena4\"></div>"
    ],
    "correctAnswer": 3,
    "explanation": "Identifique tres patrones independientes: movimiento del círculo, alternancia de color diagonal y alternancia de color completo. Aplique cada patrón a la fila 4.",
    "area": 1,
    "dificultad": 2,
    "peso": 31,
    "pista": "Observa si la figura rota en sentido horario o si los elementos internos se alternan.",
    "estado": 1
  },
  {
    "id": 41,
    "title": "Patrón de sombreado",
    "content": "Considere la siguiente figura que sigue un patrón por fila:<br><center><img src=\"./figuras/cuadrofracciones.png\"alt=\"cuadrofracciones\"></center>¿Cuál opción debe colocarse en el recuadro en blanco?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/cuadrofracciones1.png\"alt=\"cuadrofracciones1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/cuadrofracciones2.png\"alt=\"cuadrofracciones2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/cuadrofracciones3.png\"alt=\"cuadrofracciones3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/cuadrofracciones4.png\"alt=\"cuadrofracciones4\"></div>"
    ],
    "correctAnswer": 2,
    "explanation": "Identifique dos patrones independientes: el tipo de figura que aparece en cada fila y la cantidad de secciones sombreadas que debe haber en cada columna.",
    "area": 1,
    "dificultad": 3,
    "peso": 66,
    "pista": "Resta el área de la figura interna al área de la figura externa.",
    "estado": 1
  },
  {
    "id": 42,
    "title": "Patrón de puntos en círculos",
    "content": "Considere la siguiente figura que sigue un patrón por fila:<center><img src=\"./figuras/bolasdeboliche.png\"alt=\"bolasdeboliche\"></center>¿Cuál opción debe colocarse en el recuadro en blanco?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolasdeboliche1.png\"alt=\"bolasdeboliche1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolasdeboliche2.png\"alt=\"bolasdeboliche2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolasdeboliche3.png\"alt=\"bolasdeboliche3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolasdeboliche4.png\"alt=\"bolasdeboliche4\"></div>"
    ],
    "correctAnswer": 1,
    "explanation": "Superponga mentalmente los círculos de las columnas 1 y 2 para obtener el resultado en columna 4. La columna 3 representa el 'punto faltante'.",
    "area": 1,
    "dificultad": 1,
    "peso": 49,
    "pista": "Suma los valores conocidos y réstalos del total para hallar la incógnita.",
    "estado": 1
  },
  {
    "id": 43,
    "title": "Lógica de Conjuntos",
    "content": "Considere la siguiente figura que sigue un patrón por fila:<br><center><img src=\"./figuras/patronfigurillas.png\"alt=\"patronfigurillas\"></center>¿Cuál opción corresponde a la parte faltante?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/patronfigurillas1.png\"alt=\"patronfigurillas1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/patronfigurillas2.png\"alt=\"patronfigurillas2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/patronfigurillas3.png\"alt=\"patronfigurillas3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/patronfigurillas4.png\"alt=\"patronfigurillas4\"></div>"
    ],
    "correctAnswer": 0,
    "explanation": "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado. Lo primero que se debe notar es que los trapecios de la primera fila varían en su diseño, generados por rotación con respecto a la línea horizontal:<br><center><img src=\"./figuras/explicacion_43_1.png\"alt=\"Explicacion_43_1\"></center>Lo mismo sucede en la segunda fila:<br><center><img src=\"./figuras/explicacion_43_2.png\"alt=\"Explicacion_43_2\"></center>Por último, los pentágonos de la tercera fila tienen el mismo comportamiento:<center><img src=\"./figuras/explicacion_43_3.png\"alt=\"Explicacion_43_3\"></center>Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 2,
    "peso": 82,
    "pista": "Ubica primero los elementos que pertenecen a ambos grupos en la intersección.",
    "estado": 1
  },
  {
    "id": 44,
    "title": "Sucesiones de Crecimiento",
    "content": "Considere la siguiente figura que sigue un patrón por fila:<br><center><img src=\"./figuras/caepelota.png\"alt=\"caepelota\"></center>¿Cuál opción debe colocarse en el recuadro en blanco?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/caepelota1.png\"alt=\"caepelota1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/caepelota2.png\"alt=\"caepelota2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/caepelota3.png\"alt=\"caepelota3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/caepelota4.png\"alt=\"caepelota4\"></div>"
    ],
    "correctAnswer": 3,
    "explanation": "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado. Note que en cada fila se pueden identificar cuatro cuadrados, los cuales están divididos por su diagonal. Además, cada cuadrado de por medio tiene sombreado la mitad superior y estos no contienen el círculo gris.<br><br>En los cuadrados que contienen el círculo gris se observa un comportamiento con respecto a la posición sobre la diagonal: ''arriba'', ''medio'' y ''abajo''.<br><BR>Con ello se tiene:<BR><ul class=\"latex-list\"><li><span>En el caso de la primera fila, falta el círculo ''abajo''.</span></li><li><span>En el caso de la segunda fila, no hay círculo, solo zona sombreada en la parte superior derecha.</span></li><li><span>En el caso de la tercera fila, falta el círculo ''medio''.</span></li></ul>Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 3,
    "peso": 17,
    "pista": "Analiza si la diferencia entre números aumenta de forma constante o multiplicativa.",
    "estado": 1
  },
  {
    "id": 45,
    "title": "Planteo de Edades",
    "content": "Considere las siguientes figuras:<br><center><img src=\"./figuras/dadosseguidos.png\"alt=\"dadosseguidos\"></center>¿Cuál figura tiene un patrón geométrico diferente de las otras?",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado e identificar cuál de ellas no sigue este patrón. Lo primero que se nota en las figuras 1, 2, 3 y 5 es que la diferencia entre los puntos de los cuadros superior e inferior es de una unidad. No obstante, en la figura 4 esta diferencia es de 2 unidades. Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 1,
    "peso": 94,
    "pista": "Traduce 'el doble de la edad pasada' como una ecuación con (x - n).",
    "estado": 1
  },
  {
    "id": 46,
    "title": "Interpretación de Gráficos",
    "content": "Considere las siguientes figuras:<br><center><img src=\"./figuras/negrosencuadricula.png\"alt=\"negrosencuadricula\"></center><br>¿Cuál figura tiene un patrón geométrico diferente de las otras, con respecto a los cuadros sombreados?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado y debe identificarse cuál de ellas no sigue este patrón. Note que en las figuras 1, 2 y 4 los cuadrados sombreados se agrupan en múltiplos de dos. No obstante, en la figura 3 hay un cuadro sombreado que no cumple lo anterior. Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 2,
    "peso": 36,
    "pista": "Compara las pendientes: una inclinación mayor indica un cambio más rápido.",
    "estado": 1
  },
  {
    "id": 47,
    "title": "Cálculo Probabilístico",
    "content": "Considere la siguiente secuencia de figuras:<br><center><img src=\"./figuras/sombreroslocos.png\"alt=\"sombreroslocos\"></center>¿Cuál es la figura que continúa la secuencia?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/sombreroslocos1.png\"alt=\"sombreroslocos1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/sombreroslocos2.png\"alt=\"sombreroslocos2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/sombreroslocos3.png\"alt=\"sombreroslocos3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/sombreroslocos4.png\"alt=\"sombreroslocos4\"></div>"
    ],
    "correctAnswer": 0,
    "explanation": "Este ítem contiene algunos patrones que deben descubrirse por observación de la secuencia de figuras. Inicialmente, se puede determinar a partir del patrón de figuras planas (círculo, cuadrado y triángulo) que la figura siguiente corresponde a un círculo, con lo que se descarta las opciones 2 y 4.<br><br>Por otro lado,  basta con evaluar el patrón de la línea externa en cada figura. Observe que la línea se puede ubicar de cinco maneras distintas y esta posición rota en sentido horario:<br><center><img src=\"./figuras/explicacion_47_1.png\"alt=\"Explicacion_47_1\"></center>Por lo tanto, la opción correcta es la 1.",
    "area": 1,
    "dificultad": 3,
    "peso": 59,
    "pista": "Divide el número de casos favorables entre el total de resultados posibles.",
    "estado": 1
  },
  {
    "id": 48,
    "title": "Relación de Analogía",
    "content": "Considere la siguiente secuencia de figuras:<br><center><img src=\"./figuras/figrectangulos.png\"alt=\"figrectangulos\"></center>¿Cuál figura debe ir en la posición 6?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figrectangulos1.png\"alt=\"figrectangulos1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figrectangulos2.png\"alt=\"figrectangulos2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figrectangulos3.png\"alt=\"figrectangulos3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figrectangulos4.png\"alt=\"figrectangulos4\"></div>"
    ],
    "correctAnswer": 3,
    "explanation": "Para resolver este ítem, se debe identificar los cambios en cada figura, de manera que se pueda deducir un patrón para obtener la figura que sigue.<br><br>Note que cada figura está dividida a la mitad, con una parte oscura y otra clara, donde la línea divisoria comienza vertical (figura 1), luego gira en un ángulo de 45 grados hacia la derecha (figura 2), pasa a horizontal (figura 3), luego a diagonal (figura 4) y vuelve a ser vertical (figura 5). Según este patrón, la posición 6 debe ser diagonal, descartando las opciones 1 y 3. Además, la opción 2 no es correcta, pues la diagonal no corresponde al giro de 45 grados hacia la derecha.  Por lo tanto, la opción correcta es la 4.",
    "area": 1,
    "dificultad": 1,
    "peso": 21,
    "pista": "ADefine la función del primer objeto: ¿es una herramienta, parte o contenedor?",
    "estado": 1
  },
  {
    "id": 49,
    "title": "Ordenamiento Circular",
    "content": "Considere la siguiente secuencia de figuras:<br><center><img src=\"./figuras/figcasitas.png\"alt=\"figcasitas\"></center>¿Cuál figura debe ir en la posición 8?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figcasitas1.png\"alt=\"figcasitas1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figcasitas2.png\"alt=\"figcasitas2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figcasitas3.png\"alt=\"figcasitas3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/figcasitas4.png\"alt=\"figcasitas4\"></div>"
    ],
    "correctAnswer": 3,
    "explanation": "Para resolver este ítem se debe identificar los cambios en cada figura, de manera que se pueda deducir un patrón que permita obtener las demás figuras hasta llegar a la solicitada que en este caso, es la figura en la posición 8. Para ello considere la siguiente secuencia:<br><center><img src=\"./figuras/explicacion_49_1.png\"alt=\"Explicacion_49_1\"><br><img src=\"./figuras/explicacion_49_2.png\"alt=\"Explicacion_49_2\"></center>Se nota que hay un patrón que se repite cada 4 figuras: se dobla el triángulo hacia adentro del cuadrado (figura 2), la figura resultante se rota 180 grados (figura 3)  y se vuelve a colocar el triángulo fuera del cuadrado (figura 4). De la figura 5 a la 8 este patrón se repite, pero respetando la colocación del triángulo en la figura 5. Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 2,
    "peso": 75,
    "pista": "Si A está frente a B en una mesa de seis, deja dos espacios entre ellos.",
    "estado": 1
  },
  {
    "id": 50,
    "title": "Razonamiento Espacial",
    "content": "Considere la siguiente secuencia de figuras:<br><center><img src=\"./figuras/bolitasblancasnegras.png\"alt=\"bolitasblancasnegras\"></center>¿Cuál figura debe ir en la posición 8?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolitasblancasnegras1.png\"alt=\"bolitasblancasnegras1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolitasblancasnegras2.png\"alt=\"bolitasblancasnegras2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolitasblancasnegras3.png\"alt=\"bolitasblancasnegras3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/bolitasblancasnegras4.png\"alt=\"bolitasblancasnegras4\"></div>"
    ],
    "correctAnswer": 1,
    "explanation": "Para resolver este ítem se debe considerar los cambios en cada figura, de manera que se pueda deducir un patrón para obtener las demás figuras hasta llegar a la solicitada, que en este caso es la de la posición 8. Para ello, se pueden dibujar las figuras adicionales a la secuencia, añadiendo una columna de puntos a cada figura subsiguiente:<br><br><center><img src=\"./figuras/explicacion_50_1.png\"alt=\"Explicacion_50_1\"></center>Además, se debe reconocer la alternancia entre los colores negro y blanco del punto en la primera fila y primera columna de cada figura. Luego, se identifica el patrón numérico en la cantidad de puntos negros o blancos. Por ejemplo, en la figura 2 y 3 se mantienen 3 puntos negros, luego en las posiciones 4 y 5 hay 10 puntos negros ($10=3+7$); seguidamente en las posiciones 6 y 7 hay 21 puntos negros ($21=3+7+11$);  finalmente, en la posición 8 hay 36 puntos negros ($36=3+7+11+15$). Por lo tanto, la opción correcta es la 2.<br><br>Una explicación alternativa es notar que se forman cuadrados que aumentan de tamaño y alternan el color de su diagonal. En tal caso, la figura 8 es un cuadrado de 8x8 con su diagonal de color negro.",
    "area": 1,
    "dificultad": 3,
    "peso": 40,
    "pista": "Imagina la figura plegada y verifica qué caras quedan adyacentes.",
    "estado": 1
  },
  {
    "id": 51,
    "title": "Sentido de Giro",
    "content": "Considere la siguiente secuencia de figuras:<br><center><img src=\"./figuras/estrellassecuencia.png\"alt=\"estrellassecuencia\"></center>¿Cuál figura debe ir en la posición 36?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/estrellassecuencia1.png\"alt=\"estrellassecuencia1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/estrellassecuencia2.png\"alt=\"estrellassecuencia2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/estrellassecuencia3.png\"alt=\"estrellassecuencia3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/estrellassecuencia4.png\"alt=\"estrellassecuencia4\"></div>"
    ],
    "correctAnswer": 1,
    "explanation": "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado e identificarse tanto el patrón de sombreado como el del movimiento del círculo que rota hacia la derecha.Las figuras de la 7 a la 12 y de la 13 a la 18 son:<br><center><img src=\"./figuras/explicacion_51_1.png\"alt=\"Explicacion_51_1\"><br><img src=\"./figuras/explicacion_51_2.png\"alt=\"Explicacion_51_2\"></center>Note que las figuras en posición par no se encuentran sombreadas, por lo que las opciones 1 y 4 no pueden ser consideradas. Por otro lado, note que la posición del círculo comprende las 5 intersecciones de la estrella, por lo que la sexta figura va a variar 5 veces antes de volver a la figura de la sucesión inicial. Al ser la posición 36, será la sucesión 5 veces después, por lo que volverá a la sucesión original. Por lo tanto, la opción correcta es la 2.<br><BR>Una explicación alternativa es notar que el círculo negro vuelve a la posición original después de 5 giros: $1+5=6$, $6+5=11$, $11+5=16$, $16+5=21$, es decir $1+5n$. Por tanto en $36=5\\cdot 7+1$ vuelve a la posición original.",
    "area": 1,
    "dificultad": 1,
    "peso": 68,
    "pista": "Engranajes en contacto giran opuestos; unidos por faja, giran igual.",
    "estado": 1
  },
  {
    "id": 52,
    "title": "Conteo de Figuras",
    "content": "Considere la siguiente secuencia de figuras:<br><center><img src=\"./figuras/circulos.png\"alt=\"circulos\"></center>¿Cuál figura debe ir en la posición 99?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/circulos1.png\"alt=\"circulos1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/circulos2.png\"alt=\"circulos2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/circulos3.png\"alt=\"circulos3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/circulos4.png\"alt=\"circulos4\"></div>"
    ],
    "correctAnswer": 3,
    "explanation": "Para resolver este ítem se debe reconocer los cambios en cada figura, de manera que se pueda deducir un patrón para obtener las demás figuras hasta llegar a la solicitada que, en este caso, es la figura en la posición 99. Considere la secuencia dada para llegar a las primeras 12 figuras:<br><center><img src=\"./figuras/explicacion_52_1.png\"alt=\"Explicacion_52_1\"></center><br>Note que las figuras en las posiciones 1, 5 y 9 son iguales, y así también lo será la 13 y todas las demás en la posición $4n+1$ (figura 1), es decir, las figuras que sean múltiplos de 4 más una unidad, o bien, las que al dividir por 4 tengan residuo 1.<br><br>Por otro lado, las figuras en las posiciones $2$, $6$ y $10$ son iguales y, de esta forma, lo será la 14 y todas las demás en la posición $4n+2$ (figura 2), es decir, que sean múltiplos de 4 más dos unidades, o bien, las que al dividir por 4 tengan residuo 2.<br><br>Luego, las figuras en las posiciones 3, 7 y 11 son iguales, y con ello lo será la 15 y todas las demás en la posición $4n+3$ (figura 3), es decir, que sean múltiplos de 4 más tres unidades, o bien, las que al dividir por 4 tengan residuo 3.<br><br>Finalmente, las figuras en las posiciones 4, 8 y 12 son iguales, y así también lo será la 16 y todas las demás en la posición $4n$ (figura 4), es decir, que sean múltiplos de 4, o bien, las que al dividir por 4 tengan residuo $0$.<br><br>Con base en la expresión utilizada, 99 se puede escribir como $4n+3$, es decir:$$99=4\\cdot24+3$$Entonces, la figura en la posición 99 es igual a la figura en la posición 3.<br> <br>Una explicación alternativa es notar que el patrón consta de 4 figuras. Al multiplicar $4\\cdot25$ se obtienen 100 posiciones de figuras en las que han  transcurrido 25 ciclos, por lo que figura 100 será igual a la posición 4. De este modo, la figura en la posición 99 es la misma en la posición 3.  Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 2,
    "peso": 53,
    "pista": "Cuenta primero las formas simples y luego las compuestas por varias regiones.",
    "estado": 1
  },
  {
    "id": 53,
    "title": "Calendarios y Tiempo",
    "content": "Considere la siguiente secuencia de figuras formada por pajillas del mismo tamaño y bolitas de plasticina:<br><center><img src=\"./figuras/figurasconpuntos.png\"alt=\"figurasconpuntos\"></center>¿Cuántos pajillas se necesitan para construir la figura 10?",
    "options": [
      "$20$",
      "$52$",
      "$57$",
      "$70$"
    ],
    "correctAnswer": 3,
    "explanation": "Para resolver este ítem se debe considerar los cambios en cada figura, de manera que se pueda deducir un patrón. Note que la cantidad de pajillas aumenta hasta generar la figura en la décima posición, la cual se puede dibujar añadiendo cuadrados y romboides:<br><center><img src=\"./figuras/explicacion_53_1.png\"alt=\"Explicacion_53_1\"></center>Al contar cada pajilla por aparte, se obtiene lo siguiente:<br><center><img src=\"./figuras/explicacion_53_2.png\"alt=\"Explicacion_53_2\"></center>Así en $a$ se cuentan todas las pajillas laterales; en $b$ se cuentan las pajillas superiores; en $c$ se cuentan los lados compartidos por romboides y cuadrados y, finalmente, en $d$ se cuentan todas las pajillas que forman la base de cada cuadrado.<br><br>De esta manera, $22 + 10 + 10 + 10 = 52$. Por lo tanto, la opción correcta es la 2.<br><br>Una solución alternativa es notar que en cada figura hay tres filas horizontales, cuya cantidad de pajillas coincide con el número de la figura. Además, la cantidad de pajillas verticales y oblicuas corresponde con el número de la figura más una unidad. Por ejemplo, la figura 3 tiene tres filas horizontales con 3 pajillas, 4 pajillas verticales y 4 oblicuas. Por tanto, la figura 10 tendrá 3 filas de 10 pajillas, 11 pajillas verticales y 11 oblicuas para un total de 52 pajillas.",
    "area": 1,
    "dificultad": 3,
    "peso": 26,
    "pista": "Cada 7 días el nombre del día se repite; usa el residuo de la división.",
    "estado": 1
  },
  {
    "id": 54,
    "title": "Criptoaritmética de Dígitos",
    "content": "Considere la siguiente figura:<center><img src=\"./figuras/vistasombra.png\"alt=\"vistasombra\"></center>¿Cuál es la forma que proyectan las figuras sobre el plano con respecto a la vista frontal?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vistasombra1.png\"alt=\"vistasombra1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vistasombra2.png\"alt=\"vistasombra2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vistasombra3.png\"alt=\"vistasombra3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vistasombra4.png\"alt=\"vistasombra4\"></div>"
    ],
    "correctAnswer": 0,
    "explanation": "Para este ítem hay que observar cada una de las figuras y proyectarlas hacia al plano, como se muestra a continuación:<center><img src=\"./figuras/explicacion_54_1.png\"alt=\"Explicacion_54_1\"></center>En el caso de la figura curva, se proyecta un rectángulo; el cono truncado proyecta un círculo y la pirámide truncada rectangular marca un rectángulo en el plano. Por lo tanto, la opción correcta es la 1.",
    "area": 1,
    "dificultad": 1,
    "peso": 91,
    "pista": "Si una suma de dígitos iguales termina en el mismo número, prueba con el cero.",
    "estado": 1
  },
  {
    "id": 55,
    "title": "Validez de Premisas",
    "content": "Considere las siguientes vistas de una figura tridimensional:<center><img src=\"./figuras/vista.png\"alt=\"vista\"></center>¿Cuál de las siguientes figuras se puede formar con estas vistas?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vista1.png\"alt=\"vista1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vista2.png\"alt=\"vista2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vista3.png\"alt=\"vista3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/vista4.png\"alt=\"vista4\"></div>"
    ],
    "correctAnswer": 2,
    "explanation": "Una estrategia para resolver este ítem es considerar la figura desde la vista superior, para notar que debe tener un trapecio en el techo, según la siguiente figura:<center><img src=\"./figuras/explicacion_55_1.png\"alt=\"Explicacion_55_1\"></center><br>Por lo anterior, se descartan las opciones 1 y 4.<br><br>Luego, se descarta la opción 2 porque en la vista lateral hay un corte en diagonal. Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 2,
    "peso": 44,
    "pista": "Dibuja círculos: si todo A es B y todo B es C, entonces A está en C.",
    "estado": 1
  },
  {
    "id": 56,
    "title": "Variación Porcentual",
    "content": "Considere las siguientes figuras:<center><img src=\"./figuras/cuadrosconlineas1.png\"alt=\"cuadrosoconlineas1\"></center>¿Cuál de ellas se debe rotar para obtener<img src=\"./figuras/cuadrosconlineas2.png\"alt=\"cuadrosconlineas2\">?",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 1,
    "explanation": "La estrategia para resolver este ítem consiste en identificar el sentido de rotación correcto (hacia la izquierda o hacia la derecha), de manera que al rotar se genere la figura solicitada, en la cual se nota que las líneas que no son diagonales dentro de los cuadrados deben ser paralelas entre sí.  Esto descarta las figuras a y c.<br><BR>La figura d también se descarta, porque al rotarla en cualquier dirección, no coinciden las diagonales de los cuadrados con la posición de la figura solicitada.<br><br>En el caso de la figura b, al rotar se tiene que:<center><img src=\"./figuras/explicacion_56_1.png\"alt=\"Explicacion_56_1\"></center>Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 3,
    "peso": 77,
    "pista": "Un aumento y un descuento del mismo porcentaje no anulan el cambio.",
    "estado": 1
  },
  {
    "id": 57,
    "title": "Lógica de Caminos",
    "content": "Para empacar cinco bolas se utilizan cilindros de 3 cm de radio y  30 cm de altura. Se puede afirmar con certeza que cada empaque contiene bolas que",
    "options": [
      "exceden los 3 cm de radio.",
      "exceden los 6 cm de diámetro.",
      "no exceden los 3 cm de radio.",
      "no exceden los 3 cm de diámetro."
    ],
    "correctAnswer": 2,
    "explanation": "Para resolver este ítem se va a analizar la posibilidad de que suceda con certeza cada afirmación.<BR><BR><ul class=\"latex-list\"><li>Cada empaque contiene bolas que exceden los 3 cm de radio.<br><b>Falsa</b>, pues el radio del cilindro es de 3 cm y, suponiendo que las 5 bolas quedan justas, como se muestra en la figura, su radio no puede exceder los 3 cm, ya que no entrarían en el cilindro.<center><img src=\"./figuras/explicacion_57_1.png\"alt=\"Explicacion_57_1\"></center><br><LI>Cada empaque contiene bolas que exceden los 6 cm de diámetro.<br><b>Falsa</b>, dado que el diámetro es el doble del radio, lo que excedería los 3 cm de radio.</li><li>Cada empaque contiene bolas que no exceden los 3 cm de radio.<br><b>Verdadera</b>, ya que el radio máximo de cada bola es de 3 cm. Esto no excluye la posibilidad de que las bolas sean más pequeñas.</li><li>Cada empaque contiene bolas que no exceden los 3 cm de diámetro.<br><b>Indeterminada</b>, ya que existe la posibilidad de que las bolas  tengan menos de 3 cm de radio, pero no se tiene la certeza de que midan menos de 1.5 cm de radio (3 cm de diámetro).</span></li></ul>Por lo tanto, la opción correcta es la 3.",
    "area": 1,
    "dificultad": 1,
    "peso": 32,
    "pista": "Evalúa cuántas rutas llegan a un punto sin retroceder ni repetir tramos.",
    "estado": 1
  },
  {
    "id": 58,
    "title": "Velocidad Relativa",
    "content": "Considere la siguiente figura:<center><img src=\"./figuras/dadofiguras.png\"alt=\"dadofiguras\"></center>Si se dobla para formar un cubo, ¿cuál figura se obtiene?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/dadofiguras1.png\"alt=\"dadofiguras1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/dadofiguras2.png\"alt=\"dadofiguras2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/dadofiguras3.png\"alt=\"dadofiguras3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/dadofiguras4.png\"alt=\"dadofiguras4\"></div>"
    ],
    "correctAnswer": 1,
    "explanation": "Para resolver este ítem, se debe visualizar la forma extendida dada en el enunciado y luego doblarlo para formar un cubo. Al formarlo, el triángulo queda opuesto al cuadrado negro, la estrella al corazón y el círculo al cuadrado blanco. Además, el corazón queda al lado del círculo y el triángulo negro arriba del corazón.  Las opciones 1, 3 y 4 se descartan al no cumplir con alguna de esas posiciones. Por lo tanto, la opción correcta es la 2.<br>",
    "area": 1,
    "dificultad": 2,
    "peso": 85,
    "pista": "Si dos objetos van al encuentro, suma sus velocidades para hallar el tiempo.",
    "estado": 1
  },
  {
    "id": 59,
    "title": "Suficiencia de Información",
    "content": "Considere la siguiente figura, la cual corresponde a un papel cuadrado doblado con algunas figuras marcadas:<center><img src=\"./figuras/papeldoblado.png\"alt=\"papeldoblado\"></center>Al desdoblar el papel,  ¿cuál figura se obtiene,  de manera que presente simetría con respecto a ambas diagonales?",
    "options": [
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/papeldoblado1.png\"alt=\"papeldoblado1\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/papeldoblado2.png\"alt=\"papeldoblado2\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/papeldoblado3.png\"alt=\"papeldoblado3\"></div>",
      "<div class=\"contenedor-zoom22\"><img src=\"./figuras/papeldoblado4.png\"alt=\"papeldoblado4\"></div>"
    ],
    "correctAnswer": 0,
    "explanation": "Para resolver este ítem, se debe partir de la condición de que la figura tiene simetría con respecto a ambas diagonales, por lo que se descartan la figuras 2 y 3. Luego, se observa que los cuadrados no son continuos en la figura del papel doblado, pues están separados y rotados. Por lo tanto, la opción correcta es la número 4.<br>",
    "area": 1,
    "dificultad": 3,
    "peso": 20,
    "pista": "Determina si el primer dato permite hallar un valor único por sí solo.",
    "estado": 1
  },
  {
    "id": 60,
    "title": "Sucesiones Alfabéticas",
    "content": "Considere la siguiente secuencia de figuras:<center><img src=\"./figuras/cuadradosarea.png\"alt=\"cuadradosarea\"></center>Con base en el patrón anterior, considere  las siguientes afirmaciones:<br><br><li><b>A. </b><span>El área sombreada de la figura 2 es $\\dfrac{1}{3}$ del área sombreada de la figura 1.</span></li><li><b>B. </b><span>El área sombreada de la figura 1 es $\\dfrac{1}{4}$ del área sombreada de la figura 3.</span></li><li><b>C. </b><span>El área sombreada de la figura 3 es $\\dfrac{1}{2}$ del área sombreada de la figura 2.</span></li><br>De las anteriores, ¿cuáles son verdaderas?",
    "options": [
      "Solo A",
      "Solo C",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 1,
    "explanation": "Para este ítem, se debe hacer un análisis por figura, donde la figura 1 es la que se replica en las figuras de la secuencia.<BR><BR><ul class=\"latex-list\"><li><span>En la figura 1 se tiene que el área sombreada es dos tercios de la mitad del cuadrado mayor. Esto es:$$\\mbox{ Área sombreada Figura 1 = }\\dfrac{1}{2}\\cdot\\dfrac{2}{3}=\\dfrac{2}{6}=\\fbox{$\\dfrac{1}{3}$}$$</span></li><li><span>En la figura 2 observe que se replica la figura 1 de área un tercio, pero reducida a una cuarta parte del cuadrado mayor, y esto sucede 2 veces. Esto es:$$\\mbox{ Área sombreada Figura 2 = }\\fbox{$\\dfrac{1}{3}$}\\cdot\\dfrac{1}{4}\\cdot 2=\\dfrac{2}{12}=\\dfrac{1}{6}$$</span></li><li><span>En la figura 3 observe que se replica la figura 1 de área un tercio, pero reducida a una dieciseisava parte del cuadrado mayor, y esto sucede 4 veces. Esto es:$$\\mbox{ Área sombreada Figura 3 = }\\fbox{$\\dfrac{1}{3}$}\\cdot\\dfrac{1}{16}\\cdot4=\\dfrac{2}{24}=\\dfrac{1}{12}$$</span></li></ul>De esta forma, revisamos que A es falsa, ya que $$\\mbox{ Área sombreada Figura 2} =\\dfrac{1}{6}\\neq\\dfrac{1}{3}\\mbox{ Área sombreada Figura 1}=\\dfrac{1}{3}\\cdot\\dfrac{1}{3}=\\dfrac{1}{9}$$ Asimismo, verificamos que B es falsa, ya que$$\\mbox{ Área sombreada Figura 1} =\\dfrac{1}{3}\\neq\\dfrac{1}{4}\\mbox{ Área sombreada Figura 3}=\\dfrac{1}{4}\\cdot\\dfrac{1}{12}=\\dfrac{1}{48}$$ Se observa que solo C es verdadera, ya que<br>$$\\mbox{ Área sombreada Figura 3} =\\dfrac{1}{12}=\\dfrac{1}{2}\\mbox{ Área sombreada Figura 2}=\\dfrac{1}{2}\\cdot\\dfrac{1}{6}=\\dfrac{1}{12}$$<br>Por lo tanto, la opción correcta es la 2.",
    "area": 1,
    "dificultad": 1,
    "peso": 61,
    "pista": "Cuenta cuántas letras se omiten en el abecedario entre cada término.",
    "estado": 1
  },
  {
    "id": 61,
    "title": "El efecto de la televisión",
    "content": "<div class=\"citation-box\">    La televisión nos tantaliza, quedamos como prendados de ella. Este efecto entre mágico y maléfico es obra, creo, del exceso de la luz que con su intensidad nos toma.    <div class=\"citation-source\">(Sábato, 2000)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra resume el efecto de la televisión?</p>",
    "options": [
      "Nociva",
      "Ilusoria",
      "Atractiva",
      "Seductora"
    ],
    "correctAnswer": 3,
    "explanation": "En este ítem se solicita una definición de la palabra televisión con base en el texto. Una posible estrategia es analizar las características de la televisión para encontrar una palabra que las englobe.<br/><br/>Según el texto, la televisión produce un efecto hipnótico, mágico y cautivador en el expectador. Dentro de este contexto, las opciones nociva, atractiva e ilusoria no necesariamente integran este conjunto de características.<br/><br/>Por otra parte, el significado de seductora implica un efecto de cautivar o atrapar; por tanto, este es el término que mejor define a la televisión. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 2,
    "peso": 38,
    "pista": "Considere cuál de las opciones describe la característica que se le asigna a la televisión.",
    "estado": 1
  },
  {
    "id": 62,
    "title": "El azúcar en Nueva Guinea",
    "content": "<div class=\"citation-box\">    Al principio, en la isla de Nueva Guinea, donde hace unos 10.000 años se domesticó la caña de azúcar, la gente cogía las cañas y masticaba el tallo hasta sentir la <span class=\"fill-blank\"></span> en la lengua. El azúcar era una especie de <span class=\"fill-blank\"></span>, la cura de todos los males, y ocupaba un lugar destacado en los antiguos <span class=\"fill-blank\"></span> de la isla.<br/>    <div class=\"citation-source\">(National Geographic, 2020)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
    "options": [
      "dulzura - elixir - mitos",
      "delicia - bálsamo - ritos",
      "melaza - jarabe - símbolos",
      "suavidad - remedio - cuentos"
    ],
    "correctAnswer": 0,
    "explanation": "El texto presenta tres espacios, los cuales deben completarse con términos que aporten coherencia al párrafo. Para el primer espacio se alude al sentido del gusto; por lo tanto, suavidad y delicia son sensaciones que se pueden experimentar con la dulzura de la caña de azúcar. La  melaza es un producto y no una sensación. <br/><br/>La frase \"la cura de todos los males\"  limita el contexto para encontrar el segundo término. Esta propiedad se relaciona con el concepto de elixir como el remedio maravilloso que cura todos los males, superando a los ordinarios como bálsamo o jarabe. Finalmente, la última palabra podría ser mitos o ritos, debido a que encaja en el contexto de las creencias y las capacidades mágicas de la caña. La opción correcta es la 1.<br/><br/>",
    "area": 2,
    "dificultad": 3,
    "peso": 96,
    "pista": "Revise las características que son visibles en el texto sobre el azúcar y si estas son coherentes con las opciones dadas.",
    "estado": 1
  },
  {
    "id": 63,
    "title": "La impericia de la escritura",
    "content": "<div class=\"citation-box\">    Disculpen esta <u>impericia</u>, esta torpeza al escribir. Me atropello, nada va en orden. No soy escritor... <br/>    <div class=\"citation-source\">(Víquez, 1994)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a “impericia”?</p>",
    "options": [
      "Desorden",
      "Accidente",
      "Negligencia",
      "Incompetencia"
    ],
    "correctAnswer": 3,
    "explanation": "En el ítem se muestra una palabra subrayada para encontrar su respectivo sinónimo en las opciones. El objetivo es establecer una relación de  semejanza entre  el  significado de impericia y las opciones según el texto. <br/><br/>La clave que ofrece el texto para detectar el sinónimo es \"no soy escritor\". La palabra impericia tiene que ver con la falta de destreza para ejecutar alguna actividad que, en este contexto, es una incompetencia al escribir. Desorden alude a cambios, pero no implica falta de habilidades; accidente a un suceso fortuito y negligencia apunta más a un desinterés o descuido. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 1,
    "peso": 15,
    "pista": "Sustituya la palabra en la oración para verificar si mantiene el sentido.",
    "estado": 1
  },
  {
    "id": 64,
    "title": "¿Qué es un chiste?",
    "content": "<div class=\"citation-box\">    El chiste es un dicho <u>breve</u>, <u>agudo</u> y <u>gracioso</u> que surge espontáneamente del pueblo; algunos investigadores y autores los recopilan para su publicación.<br/>    <div class=\"citation-source\">(de la Torre, 2005)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra sintetiza los términos subrayados?</p>",
    "options": [
      "Sagaz",
      "Burlesco",
      "Ingenioso",
      "Perspicaz"
    ],
    "correctAnswer": 2,
    "explanation": "En este ejemplo se debe sintetizar el significado  de las tres palabras subrayadas para identificar el atributo principal del chiste. <br/><br/>El texto afirma que el chiste es breve, agudo y gracioso, cualidades que describen una capacidad de ingenio que combina creatividad, perspicacia y síntesis. Los otros atributos, sagaz y perspicaz,  apuntan más a la agudeza; mientras que burlesco se relaciona con lo gracioso. La opción correcta es la 3.",
    "area": 2,
    "dificultad": 2,
    "peso": 64,
    "pista": "Analice cuál de las opciones resumiría de forma lógica los tres términos subrayados.",
    "estado": 1
  },
  {
    "id": 65,
    "title": "Las bases de la literatura",
    "content": "<div class=\"citation-box\">    La literatura comprometida está hecha de <u>pruebas</u>, de <u>alegatos</u>, de <u>refutaciones</u>. Leerla puede no causarnos placer, pero nos inclina a asentir o a rechazar.  <br/>    <div class=\"citation-source\">(Castellanos, 1959)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra sintetiza los términos subrayados?</p>",
    "options": [
      "Evidencias",
      "Testimonios",
      "Declaraciones",
      "Argumentaciones"
    ],
    "correctAnswer": 3,
    "explanation": "En el ítem se muestran tres palabras subrayadas con el fin de encontrar una opción que las englobe. El objetivo es identificar el término que tenga una relación de significado con pruebas, alegatos y refutaciones. Con respecto al término evidencias, este es un sinónimo de pruebas, pero no incluye las definiciones de alegatos y refutaciones. Alegato se entiende como el argumento o la discusión sobre algo o alguien. Por su parte, refutación es hallar el error en una argumentación. En cuanto a testimonios, solo implica la observación de algún suceso, pero no la refutación. Con respecto a declaraciones, es la explicación sobre un evento, por tanto, no abarca ni alegatos ni refutaciones. Finalmente, el término argumentaciones involucra contradecir (refutar o alegar) lo presentado en la literatura mediante hechos (pruebas) que respalden la opinión del lector. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 3,
    "peso": 28,
    "pista": "Analice cuál palabra engloba las tres fuentes de información de la que se habla dentro del texto.",
    "estado": 1
  },
  {
    "id": 66,
    "title": "Mito y leyenda",
    "content": "<div class=\"citation-box\">    La diferencia entre mito y leyenda es imprecisa, ya que sus orígenes son <span class=\"fill-blank\"></span>. En su lenguaje desempeñan un papel de particular relevancia la <span class=\"fill-blank\"></span> y la alegoría; ya que describen figuras míticas, que generalmente son <span class=\"fill-blank\"></span>.<br/>    <div class=\"citation-source\">(de la Torre, 2005)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
    "options": [
      "idénticos - poesía - insólitas",
      "semejantes - metáfora - simbólicas",
      "exactos - ambigüedad - metafísicas",
      "relacionados - historia - imaginarias"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem se presenta un texto donde se deben elegir tres términos que completen de manera coherente el párrafo. La clave para descifrar la respuesta está en las pistas del contexto. El texto expone más similitudes que diferencias entre el mito y la leyenda. Por tanto, en el primer espacio se deduce que existe cierta semejanza o relación en el origen de ambas. Por otro lado, idéntico y exacto contradicen la característica de imprecisión.<br/><br/>Con respecto al segundo término, las palabras lenguaje, alegoría y míticas brindan algunas pistas para establecer el acercamiento semántico hacia la palabra metáfora, que alude a una representación simbólica. En el tercer espacio, el término buscado debe asumir lo mítico y alegórico, asociado a la característica de simbólico o imaginario. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 1,
    "peso": 79,
    "pista": "Sustituya las palabras en la oración para verificar si tienen coherencia con el texto.",
    "estado": 1
  },
  {
    "id": 67,
    "title": "Viaje a Machu Picchu",
    "content": "<div class=\"citation-box\">    Machu Picchu es considerada, al mismo tiempo, una <u>obra maestra</u> de la arquitectura y la ingeniería.  Sus peculiares características <u>arquitectónicas</u> y <u>paisajísticas</u>, y el velo de misterio que ha tejido a su alrededor buena parte de la literatura publicada sobre el sitio, lo han convertido en una de las siete maravillas del mundo moderno.    <div class=\"citation-source\">(Elaboración propia)</div>  </div>  <p style=\"margin-top: 20px;\"><b></b></p><br><p>Según el texto, ¿cuál opción sintetiza las características subrayadas?</p>",
    "options": [
      "Sitio espiritual",
      "Paraje histórico",
      "Lugar legendario",
      "Entorno monumental"
    ],
    "correctAnswer": 3,
    "explanation": "En este ejemplo se debe sintetizar el significado de las características subrayadas para identificar el atributo principal más alusivo a Machu Picchu. El texto afirma que Machu Picchu es un lugar catalogado como una obra maestra con características arquitectónicas y paisajísticas únicas; dichas cualidades describen lo impresionante del lugar. Las opciones 1 y 3 no sintetizan ninguna característica subrayada, mientras que la opción 2 corresponde al significado histórico y no al contexto de su entorno físico como tal. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 2,
    "peso": 47,
    "pista": "Observe que no todas las opciones engloban las palabras subrayadas.",
    "estado": 1
  },
  {
    "id": 68,
    "title": "Los beneficios de los textos electrónicos",
    "content": "<div class=\"citation-box\">    Los textos electrónicos presentan nuevas <span class=\"fill-blank\"></span> y también nuevos retos que pueden tener gran impacto sobre las <span class=\"fill-blank\"></span> que tiene el individuo de comprender lo que lee. La destreza en las nuevas competencias de Internet se convertirá en algo esencial para el futuro <span class=\"fill-blank\"></span> de nuestros alumnos.<br/>    <div class=\"citation-source\">(Asociación Internacional de Lectura, 2001)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
    "options": [
      "acciones - estrategias - progreso",
      "ayudas - capacidades - alfabetismo",
      "dificultades - habilidades - desarrollo",
      "preferencias - actitudes - aprendizaje"
    ],
    "correctAnswer": 1,
    "explanation": "En este ejercicio se tiene un texto que debe ser completado. Para resolverlo se debe verificar el significado de cada palabra en el párrafo. Para el primer espacio se presenta una contraposición entre retos y el término que se desea buscar. Entre las opciones, la única que en su significado coincide con esa contraposición es ayudas. <br/><br/>En el segundo espacio, los términos estrategias, capacidades y habilidades pueden ser posibles opciones, porque se refieren a condiciones concretas que desarrolla una persona en relación con las habilidades de lectura, mientras que actitudes hace referencia a un modo de ver las cosas. Finalmente,  alfabetismo  y aprendizaje pueden ser posibles opciones, ya que se relacionan con el contexto de la lectura. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 3,
    "peso": 93,
    "pista": "Sustituya las palabras en la oración para verificar si tienen coherencia con el texto.",
    "estado": 1
  },
  {
    "id": 69,
    "title": "La riqueza en los textos",
    "content": "<div class=\"citation-box\">    Ese texto, sin duda, por sus contenidos, por la manera en que está redactado, por su gran aporte histórico y demás características, promete tener gran <u>envergadura</u> para todos aquellos lectores que logren identificar toda su riqueza.<br/>    <div class=\"citation-source\">(Elaboración propia)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a “envergadura”?</p>",
    "options": [
      "Calidad",
      "Sentido",
      "Significado",
      "Trascendencia"
    ],
    "correctAnswer": 3,
    "explanation": "En este ítem se presenta una palabra subrayada para encontrar su respectivo sinónimo. Para resolverlo se requiere establecer la relación de semejanza entre el significado de envergadura con las opciones según el texto.<br/><br/>Las claves que brinda el texto para encontrar el sinónimo son su aporte histórico y  su riqueza. Entonces, la palabra envergadura puede asociarse con el alcance e importancia que tendrá el texto para los lectores, mientras que calidad se refiere a las características del escrito, pero no a su relevancia. Finalmente, los términos sentido y significado aluden más a la comprensión del texto.La opción correcta es la 4.",
    "area": 2,
    "dificultad": 1,
    "peso": 10,
    "pista": "Revise si la palabra tiene sentido y coherencia con el texto.",
    "estado": 1
  },
  {
    "id": 70,
    "title": "La bioelectrónica en los insectos",
    "content": "<div class=\"citation-box\">    Actualmente, se desarrolla el vínculo entre seres orgánicos y la tecnología. Precisamente, la bioelectrónica aprovecha directamente el <u>prolífico</u> repertorio de sensores olfativos y el <u>sofisticado</u> sistema nervioso de los insectos para crear biorrobots.    <div class=\"citation-source\">(Hidalgo, 2020)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras se oponen a los términos subrayados?</p>",
    "options": [
      "limitado - básico",
      "amplio - elemental",
      "reducido - complejo",
      "insuficiente - artificial"
    ],
    "correctAnswer": 0,
    "explanation": "En este ítem se presentan dos palabras subrayadas para encontrar sus respectivos antónimos en las opciones de respuesta. Una posible estrategia para resolver este ítem es identificar el significado dentro del contexto de cada término para determinar el antónimo. <br>De acuerdo con el texto, prolífico representa el gran repertorio desarrollado de sensores olfativos. En el caso de sofisticado, se presenta como la complejidad del sistema nervioso de los insectos y su contribución para la creación de biorrobots. Así, las palabras que mantienen una relación de antonimia son limitado y básico, respectivamente. La opción correcta es la 1.",
    "area": 2,
    "dificultad": 2,
    "peso": 62,
    "pista": "Observe que la solicitud es identificar los antónimos de las palabras subrayadas.",
    "estado": 1
  },
  {
    "id": 71,
    "title": "Parroquia de San Vicente.",
    "content": "<div class=\"citation-box\">    La localidad aparece por primera vez mencionada en la segunda mitad del siglo IX. De aquellos años quedan sepulcros en los alrededores de la parroquia de San Vicente. Pero sin duda los <u>vestigios</u> más destacados, además de una veintena de casas colgantes, son los de su castillo.    <div class=\"citation-source\">(Luján, 2023)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a \"vestigios\"?</p>",
    "options": [
      "Añicos",
      "Restos",
      "Destrozos",
      "Escombros"
    ],
    "correctAnswer": 1,
    "explanation": "En el ítem se presenta una palabra subrayada para elegir un sinónimo. Se debe establecer una relación de una ciudad antigua con el término vestigios que se refiere a edificios que se mantienen a través de los años. Con respecto a añicos, se refiere a pedazos en que se divide algo que se rompe, pero el texto no menciona nada sobre esto. En cuanto a destrozos, son daños realizados de manera violenta o inesperada, pero no por el paso del tiempo. En el caso de escombros tampoco es la opción correcta, pues se refiere a residuos producto de una acción, ya sea una demolición, construcción o derrumbe. La palabra restos nos remite a partes de algo que ha prevalecido en el tiempo. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 3,
    "peso": 24,
    "pista": "Observe lo que indica el texto sobre el estado actual de la parroquia.",
    "estado": 1
  },
  {
    "id": 72,
    "title": "Viaje por las islas griegas",
    "content": "<div class=\"citation-box\">    Dominando la escena central del Egeo, se distingue una constelación de islas a las que los griegos denominaron Cícladas por su disposición en círculo. Después de cinco milenios, el barco sigue siendo el medio utilizado para desplazarse entre las islas griegas. Mikonos es un excelente inicio para un <u>periplo</u> que visite las seis joyas más preciadas de islas habitadas que componen el archipiélago.<br/>    <div class=\"citation-source\">(Martínez, 2019)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a \"periplo\"?</p>",
    "options": [
      "Paseo",
      "Acceso",
      "Destino",
      "Trayecto"
    ],
    "correctAnswer": 3,
    "explanation": "El ítem presenta una palabra subrayada para encontrar su respectivo sin sinónimo. Para resolverlo se requiere establecer la relación de semejanza entre periplo, que significa un viaje por mar alrededor de algún lugar, con las opciones dadas. La primera opción, paseo, se refiere a una salida corta, por lo que no coincide con el término solicitado. La segunda opción, acceso, no es la respuesta correcta, ya que remite a una entrada hacia un lugar; las islas forman un círculo donde se pueden visitar por barco, no indica que deba haber una entrada. La tercera opción se refiere a un punto de llegada, por tanto, no coincide con la definición de periplo. La cuarta opción significa un espacio que se recorre, este corresponde a las seis islas que conforman el archipiélago. La respuesta correcta es la 4.",
    "area": 2,
    "dificultad": 1,
    "peso": 87,
    "pista": "Sustituya la palabra y revise si mantiene coherencia con el sentido del texto.",
    "estado": 1
  },
  {
    "id": 73,
    "title": "El latín en la Roma Quadrata",
    "content": "<div class=\"citation-box\">    En el momento de la fundación de la Roma Quadrata, el latín era una simple habla primitiva y <span class=\"fill-blank\"></span> empleada por pastores, campesinos y forajidos soldados rudos; pero, conforme Roma comienza a lograr victoria tras victoria sobre otros pueblos, su idioma comienza a <span class=\"fill-blank\"></span> por la misma Italia y fuera de sus fronteras.    <div class=\"citation-source\">(Quirós, 2000)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
    "options": [
      "antigua - dividirse",
      "rústica - expandirse",
      "exótica -  distribuirse",
      "arcaica -  transmitirse"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem se solicita identificar dos términos que completen el sentido lógico del texto. Este proceso requiere verificar que el significado de cada palabra sea coherente con las ideas del texto.<br/><br/>Para el primer espacio se puede inferir que el latín, además de una lengua primitiva, también es rústica, porque está asociada al habla cotidiana de pastores, campesinos y soldados forajidos, que usualmente se caracteriza por ser sencilla o poco cuidadosa, muy común dentro de estos hablantes. Los términos arcaica y antigua aluden a una condición de antigüedad. En el caso de exótica, por su significado usual de extraño o extravagante, no coincide con las características de los hablantes del latín.<br/><br/>Para hallar la segunda palabra es necesario enfocarse en la segunda parte del texto, donde señala que Roma logra victoria tras victoria y con esto consigue imponer el latín. Esta pista permite inferir que el uso de latín se extiende a otros lugares. Los vocablos dividirse, distribuirse y transmitirse se alejan del objetivo de la conquista: la expansión.<br/><br/>Por tanto, los términos que ayudan a completar con sentido lógico son rústica y expandirse. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 2,
    "peso": 51,
    "pista": "Sustituya las palabras y revise si guardan coherencia con el sentido del texto. ",
    "estado": 1
  },
  {
    "id": 74,
    "title": "¿Hay vida fuera de nuestro planeta?",
    "content": "<div class=\"citation-box\">    Ambos lugares (un lago ártico helado y una cueva tropical saturada de gases tóxicos) podrían proporcionar claves para resolver uno de los misterios más antiguos y apasionantes del mundo: ¿hay vida fuera de nuestro planeta? Es posible que la vida en otros mundos, ya sea en nuestro sistema solar o en torno a estrellas distantes, tenga que <span class=\"fill-blank\"></span> en océanos cubiertos de hielo, como los de Europa, uno de los satélites de Júpiter, o en cuevas llenas de gases, como las que quizás abundan en Marte. Si encontramos la manera de <span class=\"fill-blank\"></span> e identificar en la Tierra formas de vida capaces de <span class=\"fill-blank\"></span> en ese tipo de ambientes extremos, estaremos un paso más cerca de hallar vida en otros planetas.<br/>    <div class=\"citation-source\">(National Geographic, 2018)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
    "options": [
      "florecer - aislar - prosperar",
      "prosperar - capturar - mutar",
      "evolucionar - acordonar - variar",
      "mejorar - circundar - evolucionar"
    ],
    "correctAnswer": 0,
    "explanation": "En este ítem se requiere identificar tres palabras que completen con sentido lógico el texto. Para resolver este ítem se debe contextualizar el significado de cada palabra.<br>Para identificar la palabra del primer espacio hay que enfocarse en la idea del surgimiento de la vida en ambientes adversos, lo que apunta a una posible relación con los términos florecer o  prosperar.<br>El término del segundo espacio se relaciona con identificar otras formas de vida en la Tierra. Un posible término sería aislar como un paso previo para su estudio.<br>Finalmente, en el tercer espacio se pueden asociar los términos prosperar y evolucionar como posibles opciones del surgimiento de la vida en ambientes extremos. La opción correcta es la 1.",
    "area": 2,
    "dificultad": 3,
    "peso": 35,
    "pista": "Observe que los tres espacios en blanco aluden a acciones relacionadas con la supervivencia y el estudio de organismos en ambientes extremos.",
    "estado": 1
  },
  {
    "id": 75,
    "title": "¿Qué genera el storytelling?",
    "content": "<div class=\"citation-box\">    <div style=\"height: 9.45px;\"></div> El storytelling es el arte de contar una historia y aprovechar todos los elementos de su atmósfera para transmitir sensaciones de una forma inolvidable. Consiste en la capacidad de comunicar ideas con la intención de generar un <span class=\"fill-blank\"></span> emocional que marque al espectador y que dé lugar a un espacio de reflexión. <br/>    <div class=\"citation-source\">(Rodríguez, 2021)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra completa el párrafo anterior con sentido lógico?</p>",
    "options": [
      "vínculo",
      "impacto",
      "ambiente",
      "encuentro"
    ],
    "correctAnswer": 1,
    "explanation": "La resolución de este ítem requiere una lectura cuidadosa del texto y un análisis del contexto para encontrar la palabra que mejor complete el sentido lógico del párrafo.<br/><br/>En el texto se describe el storytelling como el arte de contar historias, con el objetivo de transmitir sensa- ciones de manera que resulten inolvidables. Además, se menciona que el storytelling implica la capacidad de comunicar ideas con la intención de provocar una reacción emocional significativa en el espectador, una reacción que lo impacte y lo lleve a reflexionar.<br/><br/>De las opciones dadas, \"impacto\" es la palabra que mejor se ajusta al contexto. El texto sugiere que el storytelling no solo busca una simple conexión o interacción con el espectador, sino que pretende generar una impresión emocional profunda y duradera. La palabra \"impacto\" capta perfectamente esta idea de una reacción intensa que \"marca al espectador\" y deja una huella emocional, lo cual fomenta un espacio de reflexión.<br/><br/>Las otras opciones no se ajustan completamente a esta intención. Por ejemplo, \"vínculo\" sugiere una relación emocional, pero no necesariamente una reacción intensa. \"Ambiente\" se refiere a la atmósfera en la narración, pero no transmite la idea de una impresión emocional profunda. Finalmente, \"encuentro\" implica una interacción, pero no una reacción emocional fuerte.<br/><br/>Por lo tanto, la palabra que mejor completa el sentido del párrafo es \"impacto\", ya que refleja la intención de generar una reacción emocional intensa y significativa. La opción correcta es la número 2.",
    "area": 2,
    "dificultad": 1,
    "peso": 72,
    "pista": "Piense qué relación existe entre el espectador y el storytelling. ",
    "estado": 1
  },
  {
    "id": 76,
    "title": "El disfraz de Odiseo",
    "content": "<div class=\"citation-box\">Como parte del uso del ingenio se encuentra también el motivo del disfraz, el cual es usado como <span class=\"fill-blank\"></span>. Un ejemplo de ello es cuando el personaje de Odiseo se disfraza de mendigo en varias ocasiones, no solo a su llegada a Ítaca, sino también antes, durante la guerra de Troya, ciudad en la que entra así como espía y roba el Paladio. <br/><br/><div class=\"citation-source\">(Cerdas y Guevara, 2023)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra completa el párrafo anterior con sentido lógico?</p>",
    "options": [
      "timo",
      "truco",
      "fraude",
      "artimaña"
    ],
    "correctAnswer": 3,
    "explanation": "La resolución de este ítem requiere una lectura cuidadosa del texto y un análisis del contexto para identificar la palabra que mejor complete el sentido lógico del párrafo.<br/><br/>El texto menciona el uso del ingenio y se refiere específicamente al motivo del disfraz, citando ejemplos relacionados con Odiseo. En estos ejemplos, Odiseo se disfraza de mendigo o espía para lograr objetivos estratégicos, como entrar a Troya y robar el Paladio. Estas acciones implican un uso astuto y planificado del disfraz para engañar o confundir a otros sin connotaciones negativas extremas.<br><br>Veamos las opciones una por una:<br><br><ul><li>Timo: Esta palabra tiene una connotación negativa, ya que implica engañar para estafar a alguien. Aunque hay un elemento de engaño en el uso del disfraz, no es el sentido principal que se busca transmitir en el texto.</li><br><li>Truco: Un \"truco\" implica un engaño menor o una estrategia simple. Aunque puede tener sentido, no transmite completamente la idea de una acción elaborada y astuta que requiere ingenio, como se describe en el texto.</li><br><li>Fraude: Similar al \"timo\", esta palabra tiene una connotación negativa fuerte relacionada con la ilegalidad o el engaño deshonesto. No es adecuada para describir el contexto estratégico y heroico de Odiseo.</li><br><li>Artimaña: Esta palabra se refiere a una acción astuta, hábil y planeada para lograr un fin mediante el engaño. Se ajusta perfectamente al contexto del disfraz usado por Odiseo, quien recurre a su ingenio y astucia para lograr sus objetivos durante y después de la guerra de Troya.<br></li></ul>La palabra que completa el párrafo con sentido lógico es \"artimaña\", ya que refleja el uso del ingenio y del disfraz de una manera estratégica y astuta. Por lo tanto, la opción correcta es la número 4.",
    "area": 2,
    "dificultad": 2,
    "peso": 46,
    "pista": "Recuerde revisar el contexto de la pregunta.",
    "estado": 1
  },
  {
    "id": 77,
    "title": "Un mensaje cotidiano",
    "content": "<div class=\"citation-box\">    Aunque parezca  <u>paradójico</u>, los mensajes más cotidianos son los más difíciles de descifrar porque el hablante, dada la poca <u>trascendencia</u> del mensaje o la rapidez con que debe pensarlo, no tiene mucho tiempo para reflexionar sobre él. <br/>    <div class=\"citation-source\">(Madrigal, 2011)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras son equivalentes a \"paradójico\" y \"trascendencia\"?</p>",
    "options": [
      "absurdo - importancia",
      "controversial - eficacia",
      "incomprensible - necesidad",
      "cuestionable - consecuencia"
    ],
    "correctAnswer": 0,
    "explanation": "En este ítem, se presentan dos palabras subrayadas para encontrar sus respectivos sinónimos en la lista de opciones. Una posible estrategia para resolver este ítem es identificar la semejanza de significados dentro del contexto de cada término.<br>De acuerdo con el texto, paradójico se refiere a una situación sin sentido de la comunicación cotidiana, por lo tanto, podría ser una situación absurda, controversial e incomprensible, pero no cuestionable.<br>En el caso de los conceptos eficacia, necesidad y consecuencia, no se presenta una relación de significado con la palabra trascendencia, cuyo significado alude a  importancia y relevancia. De este modo, las palabras que mantienen una relación de sinonimia son absurdo e importancia. La opción correcta es la 1.",
    "area": 2,
    "dificultad": 3,
    "peso": 83,
    "pista": "El contexto de la oración es muy importante para llegar a la respuesta.",
    "estado": 1
  },
  {
    "id": 78,
    "title": "La riqueza literaria de la Edad Media",
    "content": "<div class=\"citation-box\">    <div style=\"height: 9.45px;\"></div>La idea de que un texto sea capaz de múltiples lecturas es característica de la Edad Media, esa Edad Media tan calumniada y compleja que nos ha dado la arquitectura gótica, las sagas de Islandia y la filosofía escolástica en la que todo está discutido. Que nos dio, sobre todo, la <i>Comedia</i>, que seguimos leyendo y que nos sigue asombrando, que durará más allá de nuestra vida, mucho más allá de nuestras vigilias y que será enriquecida por cada generación de lectores.<br/>    <div class=\"citation-source\">(Borges, 1980)</div>  </div>  <p style=\"margin-top: 20px;\">Del texto anterior se puede inferir que la Edad Media</p>",
    "options": [
      "ha trascendido gracias a su legado.",
      "ha sido elogiada por sus contribuciones.",
      "será ignorada por las nuevas generaciones.",
      "limitó al lector de la Comedia en muchos sentidos."
    ],
    "correctAnswer": 0,
    "explanation": "Este ítem presenta un texto del que se debe inferir una conclusión  a partir del análisis de sus ideas.<br><br>De este se deduce una primera idea acerca de la Edad Media que, a pesar de recibir múltiples críticas, ha dado grandes aportes como la arquitectura, literatura islandesa, filosofía y la <i>Comedia</i>. De este libro se destaca una segunda idea que apunta a la relevancia del libro en las distintas épocas y en el futuro. <br><br>Al relacionar ambas ideas, se puede concluir que la Edad Media ha sido relevante en tiempos posteriores, es decir, ha trascendido en la historia. En el caso de la afirmación 2, se identifica una contradicción con el calificativo de calumniada. Con respecto a las conclusiones 3 y 4, también son contradictorias ante la trascendencia de la Comedia. La opción correcta es la 1.",
    "area": 2,
    "dificultad": 1,
    "peso": 55,
    "pista": "En esta pregunta debe inferir, es decir, tome la información que el texto le da y use la lógica para llegar a una conclusión que no se dice directamente. ",
    "estado": 1
  },
  {
    "id": 79,
    "title": "El liderazgo",
    "content": "<div class=\"citation-container\">    <div class=\"citation-column-wrapper\">    <div class=\"citation-title\">Texto 1</div>    El liderazgo es la función que ocupa una persona que se distingue del resto y es capaz de tomar decisiones acertadas para el grupo, equipo u organización que preceda, inspirando al resto de los que participan de ese grupo a alcanzar una meta común. La labor del líder consiste en establecer una meta y conseguir que la mayor parte de las personas deseen y trabajen por alcanzarla. Es un elemento fundamental en los gestores del mundo empresarial, para sacar adelante una empresa u organización, pero también lo es en otros ámbitos, como los deportes (saber dirigir un equipo a la victoria), la educación (profesores que consiguen que sus alumnos se identifiquen con su forma de pensar) y hasta en la familia (padres o hermanos mayores que son tenidos como absoluto ejemplo por parte de sus hijos).<br/><div class=\"citation-source\">(Pérez y Gardey, 2008)</div>   <div class=\"citation-spacer\"></div><div class=\"citation-title\">Texto 2</div>El estilo de años atrás, jerárquico y decisivo, está dando paso a un nuevo modelo de liderazgo, más colaborativo, ágil e integral. Estos son los tres aspectos clave que los líderes tendrán que reajustar para adaptarse a la nueva realidad laboral.Si algo caracterizaba a los líderes del antiguo entorno laboral, era la estructura piramidal. Un gran jefe en un despacho grande que dirige la empresa dando órdenes que los empleados ponen en marcha. Compartir información, desarrollar ideas y la toma de decisiones era competencia de unos pocos.Pero hoy en día, cada uno de los empleados en la empresa, de cualquier nivel, ha de ser informado y recibir la capacitación y el poder para alcanzar los objetivos de la compañía.<br/><div class=\"citation-source\">(Guijarro, 2018)</div>  </div>  </div>  <p style=\"margin-top: 20px;\">19. ¿Cuál es una característica del líder presente en solo uno de los textos?</p>",
    "options": [
      "La idoneidad para dirigir al equipo",
      "La capacidad para tomar decisiones",
      "La habilidad para alcanzar las metas",
      "La capacidad de  dirigir en diferentes entornos"
    ],
    "correctAnswer": 0,
    "explanation": "Para resolver este ítem  se deben identificar las características del líder en cada uno de los textos.<br><br>El texto 1 señala que un líder debe tomar decisiones acertadas, establecer metas, motivar a las personas y ser un gestor en diferentes ámbitos. <br><br>En el texto 2 se destacan dos modelos de liderazgo en el ámbito empresarial: el tradicional de tipo jerárquico, directivo y autoritario y el actual, más colaborativo e integral.<br><br>En este ítem se debe distinguir una característica presente en uno de los textos y al compararlos se encuentra que la  diferencia está en la habilidad de motivar y dirigir en los  diferentes entornos del texto 1. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 2,
    "peso": 98,
    "pista": "En esta pregunta debe inferir, es decir, tome la información que el texto le da y use la lógica para llegar a una conclusión que no se dice directamente. ",
    "estado": 1
  },
  {
    "id": 80,
    "title": "Dos textos, una conclusión",
    "content": "20. De ambos textos se deduce que una característica del liderazgo es ",
    "options": [
      "dirigir equipos en diferentes ámbitos.",
      "impulsar a las personas para alcanzar las  metas.",
      "organizar la información y capacitaciones para el equipo.",
      "desarrollar el potencial de cada persona en una empresa."
    ],
    "correctAnswer": 0,
    "explanation": "La resolución de este ítem implica identificar una característica común del liderazgo en ambos textos.<br>En el texto 1 se resalta la importancia de la toma de decisiones, la motivación de los equipos y el logro  de metas como características del liderazgo.<br>En el texto 2 se destaca un modelo de liderazgo caracterizado por la colaboración, la participación y el logro de los objetivos.<br>Al comparar las características del liderazgo en ambos textos se tiene en  común el logro de las metas. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 3,
    "peso": 13,
    "pista": "Recuerde que deducir es sacar una conclusión de algo.",
    "estado": 1
  },
  {
    "id": 81,
    "title": "La experiencia cinematográfica",
    "content": "<div class=\"citation-box\"><div style=\"height: 9.45px;\"></div> El cine permite la reunión de personas de distintos estratos sociales en un mismo lugar. Esto ayuda al público a identificarse como colectivo y a generar catarsis frente a los hechos que han marcado su historia.  Son muchas las películas, son diversas sus intenciones, pero cuando el espectador se enfrenta con un filme que lo conmueve, que cuenta con una narrativa que expone una problemática, entonces la experiencia cinematográfica se convierte en un ejercicio sociológico y psicológico.<br><div class=\"citation-source\">(Arbeláez, 2018)</div></div><p style=\"margin-top: 20px;\">Considere los siguientes efectos:<p><br><b>A.</b> Crear una identidad cultural colectiva.</p> <p><b>B.</b> Hacer una crítica sobre la realidad social.</p> <p><b>C.</b> Sensibilizar sobre las experiencias de vida.</p> <p><b>D.</b> Educar al público sobre la vida en sociedad.</p><br> <p>Según el texto, ¿cuáles de los anteriores son efectos del cine en el público?</p>",
    "options": [
      "A y B",
      "A y C",
      "B y D",
      "C y D"
    ],
    "correctAnswer": 1,
    "explanation": "En este ítem, se debe inferir los efectos del cine en el público. Para resolverlo es necesario revisar que cada enunciado se deduzca del texto, en el cual se plantea que la dinámica del cine propicia  un espacio  socializador y humano, en el cual se puede experimentar emociones cuando se ve una película, por lo tanto, se deduce un efecto sensibilizador.<br><br>Además, debido a que el espectador pertenece a un colectivo,  comparte una identidad. Entonces, los efectos A y C sí se deducen del texto. <br><br>Por otra parte, los efectos B y D no se podrían inferir del texto porque no hay ideas que apoyen al efecto educativo y crítico del cine. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 1,
    "peso": 69,
    "pista": "Recuerde responder solamente con la información que se le ofrece, no con conocimiento.",
    "estado": 1
  },
  {
    "id": 82,
    "title": "¡Pinturas con 6 dedos!",
    "content": "<div class=\"citation-box\">Varios artistas del Renacimiento pintaron obras cuyos personajes tenían seis dedos. Aunque una de las hipótesis es que esta cualidad corresponde a un error, otros críticos concluyen que es una decisión deliberada dado el carácter meticuloso de las obras y las variadas interpretaciones del número seis.<div class=\"citation-source\">(Elaboración propia)</div></div><p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones:<p><br><b>A.</b> Las motivaciones dadas por el artista carecen de importancia para la crítica. </p> <p><b>B.</b> Los artistas renacentistas eran conscientes de los detalles en su arte.</p> <p><b>C.</b> Las pinturas del Renacimiento cuentan con un carácter simbólico.</p><br>De las anteriores, ¿cuáles se infieren del texto?</p>",
    "options": [
      "Solo A",
      "Solo C",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 3,
    "explanation": "Para resolver este ítem es necesario analizar las afirmaciones cuidadosamente y determinar cuáles se infieren a partir de la información implícita en el contexto del arte renacentista.  <br/><br/>La afirmación A sostiene que las motivaciones del artista carecen de importancia para la crítica. Esta afirmación no es consistente con el texto, pues indica que los críticos deliberaron sobre las razones de los seis dedos. Por lo tanto, esta afirmación es falsa.<br/><br/>La afirmación B plantea que los artistas renacentistas eran conscientes de los detalles en su arte. Esta afirmación es verdadera porque es una paráfrasis del texto en donde se indica el carácter meticuloso de la obras.<br/><br/>La afirmación C indica que las pinturas del Renacimiento cuentan con un carácter simbólico. Esta afirmación también es correcta, ya que existen variadas interpretaciones del número seis, lo que propone múltiples significados.<br/><br/>En conclusión, las afirmaciones B y C son las que se pueden inferir  Por lo tanto, la opción correcta es la número 4.",
    "area": 2,
    "dificultad": 2,
    "peso": 42,
    "pista": "Recuerde que puede haber afirmaciones falsas. Lea bien la instrucción.",
    "estado": 1
  },
  {
    "id": 83,
    "title": "Reír para subir el rating",
    "content": "<div class=\"citation-box\"><div style=\"height: 9.45px;\"></div>Los programas “divertidos” tienen mucho rating $-$y el rating es lo supremo$-$, no importa a costa de qué valor, ni quién lo financia. Son esos programas donde divertirse es degradar, o donde todo se banaliza. Como, si habiendo perdido la capacidad para la grandeza, nos conformáramos con una comedia de regular calidad.    <div class=\"citation-source\">(Sábato, 2000)</div></div><p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones:</p><br> <p><b>A.</b> Los programas culturales tienen poca popularidad.</p> <p><b>B</b>. Las personas seleccionan el programa según el nivel de audiencia.</p> <p><b>C</b>. La oferta tiende hacia la superficialidad y el entretenimiento.</p><br><p>De las anteriores, ¿cuáles se infieren del texto?</p><br>",
    "options": [
      "Solo A",
      "Solo C",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 1,
    "explanation": "En este  ítem se debe determinar  cuáles afirmaciones se infieren a partir del análisis de las ideas del texto. Los tres enunciados deben ser analizados para encontrar su relación con los programas divertidos.<br/><br/>La afirmación A no se puede inferir porque el texto no aporta información de los programas culturales.<br/><br/>La afirmación B menciona que el público selecciona  un programa por su nivel de audiencia, sin embargo, en el texto no está explícito.<br/><br/>Finalmente, de la afirmación C se comprueba que los programas divertidos tienden a contenidos de poca trascendencia y su único objetivo es la diversión. La opción correcta es la 2.",
    "area": 2,
    "dificultad": 3,
    "peso": 80,
    "pista": "Verifique las opciones con los textos.",
    "estado": 1
  },
  {
    "id": 84,
    "title": "Aprendamos sobre la empatía",
    "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\"> <div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div> Es importante tener en cuenta que la empatía es una cualidad de la relación humana, sin la que nuestra mente no hubiera podido estructurarse saludablemente y aprendido a establecer relaciones con el mundo ni consigo misma en una cierta armonía y seguridad, ya que para que seamos capaces de dar sentido a nuestro propio mundo interno alguien ha tenido que hacerlo antes por nosotros.<br/><div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Artés, 2021)</div><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div> La “empatía” es una habilidad adquirida que se relaciona con las condiciones socioculturales en las que nos criamos y las características estructurales y funcionales en donde transcurren nuestros procesos de socialización, incluyendo la formación escolar y las experiencias tempranas de nuestro “aprendizaje social”.<br/><div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Dehter, 2009)</div><br/></div></div>  <p style=\"margin-top: 20px;\"><b></b></p> <p>Considere las siguientes afirmaciones acerca de la empatía:</p><br> <p><b>A.</b> Es necesaria para el bienestar del ser humano.</p> <p><b>B.</b> Es fundamental para el desarrollo mental.</p> <p><b>C.</b> Es una destreza aprendida con la convivencia.</p><br> <p>De las anteriores, ¿cuáles se infieren de ambos textos?</p>",
    "options": [
      "Solo A",
      "Solo C",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 0,
    "explanation": "La resolución de este ítem implica comparar ideas acerca de la empatía y su relación con el desenvolvimiento del ser humano en la sociedad.<br><br> El paso siguiente es identificar la presencia de las premisas A, B y C en cada texto. La primera se refiere a que la empatía permite el bienestar de las personas, lo cual se infiere de ambos textos. La premisa B se refiere al desarrollo mental, lo cual se infiere únicamente del texto 1.<br><br> Finalmente, la premisa C se encuentra solo en el texto 2, pues allí se establece la empatía como una habilidad adquirida mediante las relaciones sociales, no así en el texto 1, que menciona la empatía como una herramienta para aprender a relacionarse con el mundo. La opción correcta es la 1.",
    "area": 2,
    "dificultad": 1,
    "peso": 16,
    "pista": "Recuerde ignorar las afirmaciones falsas.",
    "estado": 1
  },
  {
    "id": 85,
    "title": "De los dioses a la razón",
    "content": "<div class=\"citation-box\">    <div style=\"height: 9.45px;\"></div> Los griegos desarrollaron una visión religiosa naturalista cimentada en los dioses del Olimpo, expresando sus creencias mediante la poesía y la música; cuando despertaron del mito y la fábula, cuestionaron el origen fantástico de sus conocimientos, surgiendo así la filosofía, que tiene, a partir de entonces, su origen en la razón humana y ya no más en las concepciones míticas. <br/>    <div class=\"citation-source\">(Martínez, 2016)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, la filosofía nace en Grecia debido a</p>",
    "options": [
      "la fama que gozaban los grandes pensadores griegos.",
      "al desarrollo del pensamiento libre propiciado por los griegos.",
      "las condiciones culturales que favorecieron el pensamiento crítico.",
      "las explicaciones mitológicas que fundamentaron el pensamiento crítico."
    ],
    "correctAnswer": 2,
    "explanation": "En este ítem  se debe inferir el nacimiento de la filosofía en Grecia a partir del análisis de las ideas del texto.<br/><br/>El texto plantea una ruptura en las creencias de los griegos, las cuales se basan en una visión religiosa naturalista, para dar paso a un pensamiento basado en la razón. Esta transición propicia un cambio en el pensamiento y los conocimientos de los  griegos. <br/><br/>Por otra parte, en el texto no se mencionan los grandes pensadores, tampoco explica el desarrollo de pensamiento libre y señala que la base del pensamiento crítico es la razón. La opción correcta es la 3.",
    "area": 2,
    "dificultad": 2,
    "peso": 74,
    "pista": "Recuerde omitir ideas preconcebidas cuando responda.",
    "estado": 1
  },
  {
    "id": 86,
    "title": "¿Simpatía o empatía?",
    "content": "<div class=\"citation-box\">    La palabra simpatía hace referencia a la puesta en común de dos individualidades en un intento de sintonizar emocionalmente, sin que por ello nadie deba hacer abstracción de lo que piensa o siente. Podemos afirmar que la simpatía tiene más que ver con la expresión subjetiva de sentimientos y pensamientos, mientras que la empatía busca la comprensión objetiva del mundo interno del otro.<br/>    <div class=\"citation-source\">(Artés, 2021)</div>  </div>  <p style=\"margin-top: 20px;\">Según el texto, ¿en qué se basa la diferencia entre simpatía y empatía hacia otras personas?</p>",
    "options": [
      "En el balance con las propias emociones.",
      "En la experimentación de su mundo interior.",
      "En el grado de entendimiento de su mundo interno.",
      "En la identificación imparcial con sus sentimientos."
    ],
    "correctAnswer": 0,
    "explanation": "Este ítem presenta un texto del que se debe inferir la diferencia entre simpatía y empatía hacia otras personas.<br> Del texto se infiere que la simpatía hace referencia a la conexión emocional entre dos personas y a la expresión de sentimientos y pensamientos, sin que esto represente necesariamente que la persona esté obligada a comprender en su totalidad la situación experimentada por el otro. La empatía, además del contenido emocional, analiza el contexto y las vicisitudes del otro, lo que lleva consigo a una mayor comprensión objetiva de su entorno que suele ser entendida como “ponerse en los zapatos del otro”.<br> A partir de lo anterior, la diferencia entre ambos conceptos parte del grado de entendimiento que una persona hace sobre la situación experimentada por el otro, de forma que podría coincidir emocionalmente en el plano de la simpatía, o bien, podría profundizar en la comprensión de la situación experimentada desde una perspectiva empática, lo cual le permitiría no solo coincidir emocionalmente, sino comprender el contexto en el que se desenvuelve el otro.<br> Cabe indicar que ambos conceptos parten, en algún grado, del balance y experimentación del mundo interior propio y del otro y, por su naturaleza, ninguno de los dos conceptos son interpretaciones imparciales de los sentimientos, con lo que se descartan las opciones 1, 2 y 4. La opción correcta es la 3.",
    "area": 2,
    "dificultad": 3,
    "peso": 30,
    "pista": "Responde con la información del texto, no con su conocimiento sobre el tema.",
    "estado": 1
  },
  {
    "id": 87,
    "title": "Tecnología en el ámbito educativo",
    "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\"><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div> En los años noventa, aparecen las computadoras con fuerza en los hogares y con ellas el e-learning o enseñanza a distancia, toda una revolución que facilitó la educación haciéndola más compatible con los horarios laborales y ofreciendo la autonomía que no proporciona el aula física. <br/><div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Pediguer, 2015)</div>  <br/> <div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div>  En pleno siglo XXI ha bajado la venta de computadoras y es la era del celular y entramos en el m-learning o aprendizaje móvil, el espacio para aprender de forma inalámbrica, en cualquier momento y en cualquier lugar del mundo. <br/><br/><div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Pediguer, 2015)</div><br/>  </div>  </div>  <p style=\"margin-top: 20px;\">¿Cuál es una idea común en ambos textos?</p>",
    "options": [
      "El uso del celular es el más efectivo para el aprendizaje.",
      "Las computadoras desplazaron la enseñanza tradicional.",
      "La diversificación de los dispositivos ha mejorado la educación.",
      "El uso de los dispositivos ha transformado la educación tradicional."
    ],
    "correctAnswer": 3,
    "explanation": "El texto 1 señala que la educación a distancia aparece tras el auge de las computadoras. Además, propone que este modelo es flexible para quienes laboran y promueve más libertad que el modelo tradicional.<br> El texto 2 menciona que el celular facilita el aprendizaje según la disponibilidad de tiempo y lugar de cada persona. De esta manera, la idea común compartida en ambos textos es que los dos dispositivos han provocado cambios en la educación en un contexto determinado. Si se revisan las opciones 1 y 2 solo mencionan una idea de cada uno de los textos; en la opción 3 señala la diversificación, la cual no se menciona en ninguno de los dos textos. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 1,
    "peso": 57,
    "pista": "Revise los dos tipos de dispositivos que se mencionan en la lectura.",
    "estado": 1
  },
  {
    "id": 88,
    "title": "Construcción de la posverdad",
    "content": "<div class=\"citation-box\">    La era de la posverdad  se caracteriza por amoldar los medios de información, y los contenidos, al gusto de los usuarios. Se nos muestra una verdad embellecida y configurada a nuestro gusto, algo que aceptamos como más verdadero que la propia verdad de los hechos.    <div class=\"citation-source\">(Montoya, 2019)</div>  </div>  <p style=\"margin-top: 20px;\">Una conclusión que se infiere del texto anterior es que</p><br>",
    "options": [
      "las personas deciden el valor de los hechos.",
      "el aumento de los medios ha configurado la información.",
      "la redacción atrayente favorece el consumo de la información.",
      "las personas tienen menos acceso a información crítica y objetiva."
    ],
    "correctAnswer": 3,
    "explanation": "Este ítem presenta un texto del que se debe inferir una conclusión a partir del análisis de sus ideas. La 1 no es la opción correcta pues las personas no son quienes deciden el valor de los hechos, es la posverdad la que se muestra a través de los medios de información de manera embellecida. La opción 2 es información que no aparece en el texto. La opción 3 es información que no se puede inferir tampoco porque no hay datos que remitan a la redacción. La opción 4 se concluye de la primera oración en donde se habla de amoldar los contenidos a los usuarios con lo que se infiere un menor acceso a información crítica y objetiva. La opción correcta es la 4.",
    "area": 2,
    "dificultad": 2,
    "peso": 99,
    "pista": "Distinga las características de la información que se le brinda a la sociedad.",
    "estado": 1
  },
  {
    "id": 89,
    "title": "El valor de la puntualidad en la sociedad",
    "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\"><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div> Desde pequeños nos enseñan a llegar a tiempo a clase, y en muchos colegios y después universidades, no se les permite la entrada a los alumnos que llegan con retraso al aula. Ya que eso hace que se tenga que parar la clase o que suponga una distracción para el resto del alumnado. En definitiva, que una persona llegue tarde resulta un incordio para el resto. Por eso, la primera razón por la que debemos llegar a tiempo es por una cuestión de educación y respeto. La puntualidad también puede hacer que el resto de personas del equipo confíen en ti. Si eres puntual, seguramente tendrás otras cualidades como puede ser, por ejemplo, el orden, que representa también a una persona responsable. Ya no solo es cuestión de confianza, de educación o de responsabilidad,  incluso es ser inteligente: llegar antes a los lugares te permitirá aprovechar el tiempo al máximo. Si le das valor a tu tiempo y al de las personas con las que has quedado, no debes llegar tarde. Tampoco ocurre nada si alguna vez llegas tarde, pero que no se convierta en una costumbre.<br/><div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Martín, 2014)</div><div style=\"height: 18.9px;\"></div><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div> La puntualidad es la cortesía de las personas inteligentes y comprensivas que saben que los demás tienen otras ocupaciones, aparte de las que nosotros les queremos imponer. El desprestigio, soslayo o incumplimiento de la gentileza que encierra esta palabra no obedece a los nuevos tiempos del caótico posmodernismo, pues lamentablemente parece que ya venía con algunos ancestros muy lejanos en el ADN de los pueblos latinos. Si pudiéramos sumar los minutos que llegamos tarde a las citas o que llegan retrasados nuestros trabajadores, y pudiéramos calcular un costo promedio por hora, así como se calculan las pérdidas por el atasco automovilístico, entonces estaríamos en capacidad de comprender la pérdida colectiva, el desperdicio nacional, que representa el desprecio por esta palabra. <div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Morales, 2014)</div>  </div>  </div>  <p style=\"margin-top: 20px;\">De ambos textos se deduce que la impuntualidad genera</p>",
    "options": [
      "un hábito queproduce desconfianza.",
      "un juicio negativo que afecta a las personas.",
      "un proceder que no tiene graves consecuencias.",
      "un comportamiento que conlleva pérdidas económicas."
    ],
    "correctAnswer": 1,
    "explanation": "La resolución de este ítem implica identificar las ideas relacionadas con la impuntualidad en cada uno de los textos. En el texto 1 se deduce que la impuntualidad genera retrasos, molestias, desconfianza e implica falta de inteligencia. En el texto 2 se deduce que  la impuntualidad es una falta de cortesía, desprestigio y conlleva a pérdidas en la productividad.<br/><br/>El siguiente paso es comparar las ideas del texto 1 y 2 para encontrar las características comunes a la impuntualidad como desconfianza, falta de inteligencia, descortesía y desprestigio. Por lo tanto, se puede concluir que estas características generan un juicio negativo hacia las personas. La opción correcta es la  2.",
    "area": 2,
    "dificultad": 3,
    "peso": 50,
    "pista": "Determine la percepción de la puntualidad en ambos textos.",
    "estado": 1
  },
  {
    "id": 90,
    "title": "El valor de la puntualidad en la sociedad",
    "content": "Considere las siguientes consecuencias:<br><br><li><b>A.</b> Mayor productividad.</li><li><b>B.</b> Asegurar el ingreso a clases.</li><li><b>C.</b> Menos distracción para los demás.</li><br>¿Cuáles se mencionan en ambos textos como consecuencias de la puntualidad?",
    "options": [
      "A y B",
      "B y C",
      "Solo A",
      "Solo C"
    ],
    "correctAnswer": 2,
    "explanation": "La resolución de este ítem implica realizar la comparación de ideas acerca de las consecuencias sobre la puntualidad.El paso siguiente es identificar la presencia de las consecuencias A, B y C en cada texto. La primera se refiere a la productividad, la cual se identifica en ambos textos, específicamente el texto 1 señala el aprovechamiento del tiempo y el texto 2 explica el costo promedio por hora. Finalmente, se buscan las consecuencias B y C  en ambos textos, las cuales se presentan únicamente  en el texto 1. La opción correcta es la 3.",
    "area": 2,
    "dificultad": 1,
    "peso": 11,
    "pista": "Revise las características de la puntualidad en ambos textos.",
    "estado": 1
  },
  {
    "id": 91,
    "title": "La calle como galería",
    "content": "<div class=\"citation-box\">    <div style=\"height: 9.45px;\"></div> Muchos movimientos artísticos surgieron por una necesidad de expresar, transmitir pensamientos y creencias sociales y culturales. El arte callejero, al integrar sus elementos en lugares públicos bastante transitados, pretende sorprender a los espectadores. Suele tener un llamativo mensaje subversivo que critica a la sociedad con ironía e invita a la lucha social, la crítica política o, simplemente, a la reflexión.Por otro lado, no todos los artistas buscan transmitir un pensamiento, sino que algunos son más espontáneos, pintan sin pensar demasiado en qué desean transmitirle a la sociedad.Debido a esto es que la mayoría de las obras se sale de los parámetros establecidos en el mundo del arte. Son desprolijas, no contienen muchos detalles y están hechas de manera apresurada sin un análisis previo.Los temas utilizados por los distintos artistas adeptos al arte callejero son diversos, pero siempre buscan provocar y sobre todo persuadir a la sociedad.<br/><div class=\"citation-source\">(Villalba, 2011)</div></div><p style=\"margin-top: 20px;\">Considere las siguientes definiciones:</p><br> <p><b>A.</b> Forma de expresión que invita a la crítica y a la rebeldía.</p> <p><b>B.</b> Creaciones que exploran diferentes manifestaciones artísticas.</p> <p><b>C.</b> Tendencia nacida para transmitir el sentimiento de una generación.</p><br> <p>Según el texto, ¿cuáles de las anteriores definen el arte callejero?</p>",
    "options": [
      "Solo A",
      "A y C",
      "Solo B",
      "B y C"
    ],
    "correctAnswer": 0,
    "explanation": "La resolución de este ítem  requiere de una lectura atenta y de la verificación  de las definiciones en el texto. <br/><br/>La opción A se deduce  a partir de la idea de que el arte transmite  pensamientos y creencias de una sociedad, de una manera subversiva, irónica y crítica. <br/><br/>La B no se puede inferir del texto porque no se describen las manifestaciones, solo se especifica que las obras no cumplen con los parámetros establecidos por el arte y  tienen  pocos detalles.   <br/><br/>La  C no se puede deducir del texto porque se afirma que el surgimiento de este movimiento es una forma de expresión, de creencias sociales y culturales y no de una generación. La opción correcta es la 1.",
    "area": 2,
    "dificultad": 2,
    "peso": 100,
    "pista": "Identifique el propósito del arte callejero.",
    "estado": 1
  },
  {
    "id": 92,
    "title": "Un abanico de posibilidades: la literatura",
    "content": "<div class=\"citation-box\">    La literatura como arte produce goce estético, pero también aporta conocimientos, informaciones, maneras de ver el mundo; asimismo, nos enfrenta a los valores más intrínsecos de la especie humana como la solidaridad, el respeto, el amor, la convivencia. Además, nos despierta la sensibilidad y la imaginación, ya que abre nuestros sentidos hacia otros mundos creados y por crearse, a conectarnos con otros modos de sentir. Por otra parte, nos ofrece modelos que contribuyen a mejorar la expresión escrita. La literatura nos proporciona un abanico de posibilidades y estilos que nos enriquecen en muchos sentidos. <br/>(Flores, 2018)</div><p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones sobre la literatura:</p><br> <p><b>A.</b> Usa la creatividad para conocer diferentes contextos.</p> <p><b>B.</b> Favorece la innovación de la escritura.</p> <p><b>C.</b> Cumple diversas funciones: artística, social y educativa.</p><br> <p>De las anteriores, ¿cuáles se infieren del texto?</p>",
    "options": [
      "Solo A",
      "B y C",
      "Solo C",
      "A y B"
    ],
    "correctAnswer": 0,
    "explanation": "La resolución de este ítem requiere analizar cuidadosamente cada afirmación para determinar cuáles se infieren del texto.<br/><br/>El texto presenta a la literatura como una forma de arte que produce goce estético, aporta conocimientos, fomenta la sensibilidad y transmite valores como la solidaridad, el respeto y la convivencia. También menciona que ayuda a mejorar la expresión escrita.<br/><br/>La afirmación A, sobre usar la creatividad para conocer diferentes contextos, no se puede inferir, ya que el texto no menciona ese propósito específico. La afirmación B, que sugiere que la literatura favorece la innovación en la escritura, tampoco se deduce, ya que se habla de mejorar la expresión escrita, no de innovarla. En cambio, la afirmación C, que sostiene que la literatura cumple funciones artísticas, sociales y educativas, sí se puede inferir porque el texto menciona el goce estético, la transmisión de valores y el aporte a la expresión escrita. Por lo tanto, la opción correcta es la número 3.",
    "area": 2,
    "dificultad": 2,
    "peso": 5,
    "pista": "Identifique los diversos ámbitos donde la literatura realiza aportes.",
    "estado": 1
  },
  {
    "id": 93,
    "title": "Edad de Oro del Islam",
    "content": "<div class=\"citation-box\">    Existe una obra literaria escrita en la Edad de Oro del Islam conformada por relatos de varios escritores provenientes de Asia y África. El libro innova por su gran cantidad de técnicas narrativas, por ejemplo, él mismo puede definirse como un relato enmarcado, es decir, conformado por una historia principal, que abarca otras.  <div class=\"citation-source\">(Elaboración propia)</div></div><p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones:</p><br> <p><b>A.</b> La literatura de la Edad Media del Islam se conformó exclusivamente de autores asiáticos y africanos.</p> <p><b>B.</b> La historia enmarcada corresponde a una forma original de estructurar la narración.</p><p><b>C.</b> La diversidad cultural influye en esa obra literaria de la Edad de Oro islámica.</p><br><p>De las anteriores, ¿cuáles se infieren del texto?</p>",
    "options": [
      "Solo A",
      "Solo C",
      "A y B",
      "B y C"
    ],
    "correctAnswer": 3,
    "explanation": "La resolución de este ítem requiere una lectura detallada y una cuidadosa verificación de las afirmaciones presentadas en el texto.<br/><br/>La afirmación A, que sostiene que la literatura de la Edad Media del Islam se conformó exclusivamente de autores asiáticos y africanos, no se puede deducir del texto. Aunque se menciona que los relatos provienen de escritores de Asia y África, no se afirma en ningún momento que estos sean los únicos autores. La palabra \"exclusivamente\" restringe demasiado la afirmación y no está justificada por la información proporcionada.<br/><br/>Por otro lado, la afirmación B sí se puede inferir. El texto destaca que la obra literaria innova por su uso de diversas técnicas narrativas y menciona que puede definirse como un relato enmarcado. Esta descripción implica que el relato enmarcado es una forma original y particular de estructurar la narración.<br/><br/>Asimismo, la afirmación C también se deduce del texto. Se menciona que los relatos provienen de escritores de distintas regiones —Asia y África—, lo que sugiere una influencia de diversas culturas en la obra literaria. Esta diversidad cultural es una característica implícita de la literatura de la Edad de Oro islámica.<br/><br/>En conclusión, no se puede deducir la afirmación A, pero sí se pueden inferir las afirmaciones B y C. Por lo tanto, la opción correcta es la número 4.",
    "area": 2,
    "dificultad": 1,
    "peso": 8,
    "pista": "Revise si la obra literaria fue escrita solo por escritores de Asia o África.",
    "estado": 1
  },
  {
    "id": 94,
    "title": "Papeleta presidencial",
    "content": "34. Considere la siguiente información: <ul class=\"nested-list\"><br><li class=\"nested-list-item\"><span class=\"list-label\"><b>A.</b><pr> Cada persona tiene un único documento de identidad.</pr></li><li class=\"nested-list-item\"><span class=\"list-label\"><b>B.</b></span><pr> La papeleta presidencial presenta varios candidatos presidenciales.</pr></li><li class=\"nested-list-item\"><span class=\"list-label\"><b>C.</b></span><pr> Una persona con documento de identidad tiene la opción de elegir entre varios candidatos en la papeleta presidencial.</pr></li></ul><br>Los objetos anteriores se relacionan según las siguientes reglas:<br><br>• La relación de un objeto con un objeto se simboliza: 1$ → $1</div></li><li class=\"nested-list-item\">• La relación de un objeto con varios objetos se simboliza: 1$ → $N</div></li><li class=\"nested-list-item\">• La relación de varios objetos con varios objetos se simboliza: N$ → $N</div></li><li class=\"nested-list-item\">• La relación de varios objetos con un objeto se simboliza:N$ → $1</div></li></ul><br>¿Cómo se representa la relación de los objetos: persona $ → $ documento de identidad $ → $ papeleta presidencial?",
    "options": [
      "1$\\rightarrow$1$\\rightarrow$1",
      "1$\\rightarrow$1$\\rightarrow$N",
      "1$\\rightarrow$N$\\rightarrow$N",
      "1$\\rightarrow$N$\\rightarrow$1"
    ],
    "correctAnswer": 1,
    "explanation": "Este ítem presenta tres premisas y las reglas que determinan la relación entre cada una de ellas. Una posible estrategia para resolver este ítem es el desarrollo de cada premisa según las reglas descritas.Note que para la primera premisa se describe una relación $1 → 1$, pues se establece que a cada persona le corresponde un único documento de identidad.<br><br><center><img src=\"./figuras/explicacion_94_1.png\"alt=\"Explicacion_94_1\"></center><br>La segunda premisa determina que la papeleta presidencial muestra varios candidatos presidenciales. Observe que la relación entre una persona con documento de identidad y los candidatos presidenciales es $1 →  N$, pues cada persona tiene la opción de elegir entre varios candidatos en una misma papeleta.<br><br><center><img src=\"./figuras/explicacion_94_2.png\"alt=\"Explicacion_94_2\"></center><br>Finalmente, la premisa C describe que una persona con su documento de identidad puede elegir entre varios candidatos dentro de la papeleta presidencial.La relación persona $ → $ documento de identidad $ → $ papeleta presidencial está dada por las dos relaciones descritas, pues para que una persona se relacione con los diferentes candidatos presidenciales ($1 →  N$), primero debe cumplir la relación persona $ → $ documento de identidad ($1 →  1$).<br><br><center><img src=\"./figuras/explicacion_94_3.png\"alt=\"Explicacion_94_3\"></center><br>Finalmente, la relación de los objetos persona $ → $ documento de identidad $ → $ candidatos presidenciales es $1 → 1 →  N$.<br><br><center><img src=\"./figuras/explicacion_94_4.png\"alt=\"Explicacion_94_4\"></center><br>La opción correcta es la 2.",
    "area": 2,
    "dificultad": 2,
    "peso": 3,
    "pista": "Siga cuidadosamente las indicaciones.",
    "estado": 1
  },
  {
    "id": 95,
    "title": "Trayectos trazados",
    "content": "Considere el siguiente diagrama:<br><br><div class=\"contenedor-zoom22\"><img src=\"./figuras/caminos.png\"alt=\"caminos\"></div><br></div><br>Tome en cuenta las siguientes instrucciones:<br><br><li><b>A. </b><span>El diagrama representa posibles caminos para ir de <span class=\"framebox\">INICIO</span> a <span class=\"framebox\">FIN</span>.</span></li><li><b>B. </b><span>Se señalan cinco etapas y los cuadros con números indican la finalización de la etapa respectiva.</span></li><li><b>C. </b><span>Una de las etapas es totalmente independiente y no es necesaria para llegar al final. Las otras cuatro deben cumplirse en orden numérico ascendente.</span></li><li><b>D. </b><span>Las flechas indican la o las direcciones posibles y no es necesario seguirlas todas para completar un proceso. Cuando se equivoque, usted puede retroceder hasta donde sea necesario.</span></li><li><b>E. </b><span>Por un cuadro cualquiera puede pasarse más de una vez. Cada vez que se pide un número de cuadros debe tomarse en cuenta el de partida y el de llegada.</span></li><br> ¿Cuántos caminos hay para llegar a <span class=\"framebox\">1</span> saliendo de <span class=\"framebox\">INICIO</span>?",
    "options": [
      "2",
      "3",
      "4",
      "Más de 4"
    ],
    "correctAnswer": 3,
    "explanation": "La resolución de este ítem requiere de una lectura atenta de las instrucciones  y luego relacionarlas con el diagrama mostrado. Posteriormente, se siguen las indicaciones para resolver el proceso solicitado en el ítem.Para llegar a <span class=\"framebox\">1</span> se pueden tomar los siguientes caminos:<ul class=\"latex-list\"><b>1)</b> Inicio$ → $B$ → $Z$ → $G$ → $1<br><b>2)</b> Inicio$ → $B$ → $Z$ → $H$ → $J$ → $K$ → $1<br><b>3)</b><span> Inicio$ → $D$ → $3$ → $L$ → $F$ → $G$ → $1<br><b>4)</b> Inicio$ → $D$ → $A$ → $3$ → $L$ → $F$ → $G$ → $1<br><b>5)</b> Inicio$ → $C$ → $F$ → $3$ → $L$ → $F$ → $G$ → $1</ul>Puede observarse que existen más de 4 caminos para llegar a \\fbox{1} partiendo de <span class=\"framebox\">INICIO</span>.  La opción correcta es la 4.<br>",
    "area": 2,
    "dificultad": 3,
    "peso": 7,
    "pista": "Lea con atención las indicaciones y asócielo con el diagrama.",
    "estado": 1
  },
    {
      "id": 96,
      "title": "Engranajes y Vueltas",
      "content": "Considere la siguiente secuencia creciente de cinco números enteros positivos:$$A+2,\\;3B,\\;12-C,\\;\\dfrac{24}{B},\\;15A$$donde las letras $A,B$ y $C$ representan números naturales consecutivos, respectivamente.¿Cuál es una posible expresión que continúa la secuencia?",
      "options": [
        "$4C$",
        "$9B$",
        "$\\dfrac{36}{B}+1$",
        "$20-A$"
      ],
      "correctAnswer": 1,
      "explanation": "Para resolver este ítem, es necesario determinar el valor de las variables $A, B$ y $C$ y así revelar el patrón de la secuencia. Dado que el enunciado establece que son números naturales consecutivos, podemos probar la hipótesis con los valores enteros positivos más pequeños posibles: $A=1$, $B=2$ y $C=3$.Al sustituir estos valores en las expresiones dadas, se obtiene la siguiente sucesión numérica:$$ 3, \\; 6, \\; 9, \\; 12, \\; 15 $$Se observa que la secuencia corresponde a los múltiplos consecutivos de 3, por lo que el término que completa el patrón debe ser $15 + 3 = 18$. Finalmente, se evalúan las opciones de respuesta utilizando el valor $B=2$. La única expresión que resulta en 18 es la segunda opción, dado que:$$ 9B = 9(2) = 18 $$Por tanto, la opción correcta es la <b>2</b>.",
      "area": 1,
      "dificultad": 2,
      "peso": 12,
      "pista": "A menor número de dientes, mayor será la cantidad de vueltas dadas.",
      "estado": 1
    },
    {
  "id": 97,
  "title": "Escalas Matemáticas",
  "content": "Considere la siguiente secuencia:$$S_1=1+\\left(\\dfrac{1}{2}\\right)^2=\\dfrac{5}{4}$$$$S_2=1+\\left(\\dfrac{1}{2}\\right)^2+\\left(\\dfrac{1}{2}\\right)^3=\\dfrac{11}{8}$$$$S_3=1+\\left(\\dfrac{1}{2}\\right)^2+\\left(\\dfrac{1}{2}\\right)^3+\\left(\\dfrac{1}{2}\\right)^4=\\dfrac{23}{16}$$Considere las siguientes proposiciones basadas en la secuencia anterior:<ul class=\"nested-list\">\n<li class=\"nested-list-item\" data-label=\"A.\">\n<div class=\"list-content\">$S_4-S_3>0$</div>\n</li>\n<li class=\"nested-list-item\" data-label=\"B.\"><div class=\"list-content\">$32·S_4<45$</div></li><li class=\"nested-list-item\" data-label=\"C.\"><div class=\"list-content\">$S_4+S_1<\\dfrac{96}{32}$</div></li></ul>De las anteriores, ¿cuáles son verdaderas?",
  "options": [
    "Solo A",
    "Solo B",
    "A y C",
    "B y C"
  ],
  "correctAnswer": 2,
  "explanation": "En este ítem, se debe identificar el patrón de formación de la secuencia, en el cual cada término se obtiene sumando una nueva potencia de $\\dfrac{1}{2}$ al término anterior. Note que $S_3$ termina en $\\left(\\frac{1}{2}\\right)^4$, por lo que $S_4$ debe sumar $\\left(\\frac{1}{2}\\right)^5$ al valor de $S_3$. De esta manera, es necesario calcular el valor explícito de $S_4$ para verificar la validez de las proposiciones dadas, tal como se muestra a continuación: $S_4 = S_3 + \\left(\\dfrac{1}{2}\\right)^5 = \\dfrac{23}{16} + \\dfrac{1}{32} = \\dfrac{46+1}{32} = \\dfrac{47}{32}$ Luego:<ul class=\"nested-list\"><li class=\"nested-list-item\" data-label=\"A.\">$S_4 - S_3 = \\dfrac{47}{32} - \\dfrac{46}{32} = \\dfrac{1}{32} > 0$ (<b>Verdadera</b>)</li><li class=\"nested-list-item\" data-label=\"B.\">$32\\cdot S_4 = 47 < 45$ (<b>Falsa</b>)</li><li class=\"nested-list-item\" data-label=\"C.\">$S_4 + S_1 = \\dfrac{47}{32} + \\dfrac{5}{4} = \\dfrac{47 + 40}{32} = \\dfrac{87}{32} < \\dfrac{96}{32}$ (<b>Verdadera</b>)</li></ul>Por lo tanto, las proposiciones verdaderas son la A y la C, lo que corresponde a la opción 3.",
      "area": 1,
      "dificultad": 2,
      "peso": 12,
      "pista": "Multiplica la medida del mapa por el denominador de la escala.",
      "estado": 1
},
{
  "id": 98,
  "title": "Deducción de Trayectorias",
  "content": "Se define la operación $\\star $ de la siguiente manera:$$x\\star y = \\dfrac{(x-y)^2}{x^2y^2}$$¿Cuál es el valor de $\\left[\\left((-1) \\star \\dfrac{1}{2}\\right) \\star \\left(\\dfrac{1}{2} \\star 1\\right)\\right]$?",
  "options": [
    "$-\\dfrac{64}{81}$",
    "$-\\dfrac{100}{81}$",
    "$\\dfrac{64}{81}$",
    "$\\dfrac{100}{81}$"
  ],
  "correctAnswer": 1,
  "explanation": "En este ítem, se debe resolver la operación compuesta respetando el orden de los paréntesis. Para ello, primero se calculan los valores individuales de las operaciones internas y luego se vuelve a operar con los resultados obtenidos.En primer lugar, se resuelve el primer paréntesis $\\left((-1) \\star \\dfrac{1}{2}\\right)$, donde $x=-1$ y $y=\\frac{1}{2}$:$$ (-1) \\star \\dfrac{1}{2} = \\dfrac{\\left(-1 - \\frac{1}{2}\\right)^2}{(-1)^2 \\cdot \\left(\\frac{1}{2}\\right)^2} = \\dfrac{\\left(-\\frac{3}{2}\\right)^2}{1 \\cdot \\frac{1}{4}} = \\dfrac{\\frac{9}{4}}{\\frac{1}{4}} = 9 $$En segundo lugar, se resuelve el segundo paréntesis $\\left(\\dfrac{1}{2} \\star 1\\right)$, donde $x=\\frac{1}{2}$ y $y=1$:$$ \\dfrac{1}{2} \\star 1 = \\dfrac{\\left(\\frac{1}{2} - 1\\right)^2}{\\left(\\frac{1}{2}\\right)^2 \\cdot (1)^2} = \\dfrac{\\left(-\\frac{1}{2}\\right)^2}{\\frac{1}{4} \\cdot 1} = \\dfrac{\\frac{1}{4}}{\\frac{1}{4}} = 1 $$Finalmente, se sustituyen estos resultados para realizar la operación externa $\\left[ 9 \\star 1 \\right]$, ahora $x=9$ y $y=1$:$$ 9 \\star 1 = \\dfrac{(9-1)^2}{9^2 \\cdot 1^2} = \\dfrac{8^2}{81 \\cdot 1} = \\dfrac{64}{81} $$Por lo tanto, la opción correcta es la 3.",
      "area": 1,
      "dificultad": 2,
      "peso": 12,
      "pista": "Dibuja los movimientos en un plano cartesiano para hallar la distancia final.",
      "estado": 1
},
{
  "id": 99,
  "title": "Patrones de Llenado",
  "content": "Considere la siguiente figura que sigue un patrón por columna:<br><br><div class=\"contenedor-zoom22\"><center><img src=\"./figuras/LuisFernando-hexagono-ima1_MEJORADA.png\" alt=\"Línea Luna\"></center></div><br>¿Cuál opción debe colocarse en el recuadro que contiene el signo de pregunta?",
  "options": [
    "<div class=\"contenedor-zoom22\"><img src=\"./figuras/LuisFernando-ima1_circ_linea_luna_resp_MEJORADA.png\" alt=\"Línea Luna\"></div>",
    "<div class=\"contenedor-zoom22\"><img src=\"./figuras/LuisFernando-ima1_circ_linea_luna_dis1_MEJORADA.png\" alt=\"Línea Luna\"></div>",
    "<div class=\"contenedor-zoom22\"><img src=\"./figuras/LuisFernando-ima1_circ_linea_luna_dis2_MEJORADA.png\" alt=\"Línea Luna\"></div>",
    "<div class=\"contenedor-zoom22\"><img src=\"./figuras/LuisFernando-ima1_circ_linea_luna_dis3_MEJORADA.png\" alt=\"Línea Luna\"></div>"
  ],
  "correctAnswer": 0,
  "explanation": "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado, analizando el comportamiento de los elementos por columna. Lo primero por tomar en cuenta es que los hexágonos de cada columna varían en su diseño interno y siguen una secuencia lógica:<br><br><p><ul class=\"nested-list\"><li class=\"nested-list-item\" data-label=\"a)\"><div class=\"list-content\"><b>El patrón de giro en 180° de la fila 1 a la fila 2:</b> note que al girar cada hexágono de la fila 1, en 180° en sentido horario, se obtiene como resultado las figuras respectivas de la fila 2.<br><br><div class=\"contenedor-zoom22\"><center><img src=\"./figuras/LuisFernando-hexagono-ima1_MEJORADAexp1.png\" alt=\"Línea Luna\"></center></div></div></li><li class=\"nested-list-item\" data-label=\"b)\"><div class=\"list-content\"><b>El patrón de reflejo de la fila 2 a la fila 3:</b> Note que si se refleja cada hexágono de la fila 2, se obtiene como resultado cada figura de la fila 3.<div class=\"contenedor-zoom22\"><center><img src=\"./figuras/LuisFernando-hexagono-ima1_MEJORADAexp2.png\" alt=\"Línea Luna\"></center></div></div></li></ul></p> Por lo tanto, la opción correcta es la 1.",
      "area": 1,
      "dificultad": 2,
      "peso": 12,
      "pista": "El recipiente con el conducto de salida más alto se llenará por completo primero.",
      "estado": 1
},
{
  "id": 100,
  "title": "Embarcaciones",
  "content": "Considere la siguiente lista de palabras:<div class=\"citation-box\"><center>    crucero - barco - velero - lancha   </center></div>¿Cuál palabra se relaciona con la lista anterior?",
  "options": [
    "Tren",
    "Fragata",
    "Bicicleta",
    "Avioneta"
  ],
  "correctAnswer": 1,
  "explanation": "Este ítem tiene como tarea relacionar de manera secuencial una cadena de significados. Se presenta un listado de palabras interrelacionadas semánticamente, es decir, por su sentido. En este caso, el listado presenta medios de transporte acuáticos. Se debe elegir la palabra que se relaciona con el resto. Las opciones 1 y 3 no son claves pues corresponden a medios de transporte terrestre y la opción 4 es un medio de transporte aéreo. La opción correcta es 2, fragata.",
      "area": 2,
      "dificultad": 2,
      "peso": 12,
      "pista": "Preste atención a que tienen en común las palabras de la lista.",
      "estado": 1
},
{
  "id": 101,
  "title": "Inspiración femenina en la obra de Klimt",
  "content": "Considere el siguiente texto:<div class=\"citation-box\">    La obra de Klimt se ha identificado con la suntuosa decoración basada en dorados y elementos ornamentales de vivos colores, aunque también con formas encubiertas que indican el carácter de los dibujos en que se inspiraban. Al ser la mujer uno de los temas más recurrentes de Klimt, resulta lógico que el artista representase muchas de las facetas del carácter femenino.  <div class=\"citation-source\">(Artistas eternos, 2025 )</div>  </div>  <p style=\"margin-top: 20px;\">¿Cómo se estructura el texto anterior?</p>",
  "options": [
    "Exposición - oposición- adición - condición",
    "Exposición - adición - causa - consecuencia",
    "Descripción - oposición - causa - consecuencia",
    "Explicación - adición - condición - ejemplificación"
  ],
  "correctAnswer": 2,
  "explanation": "En este ítem, se deben buscar relaciones entre el texto y las opciones por medio de las palabras de enlace o el contexto. En este caso, se presenta una primera información sobre la obra de Klimt: “suntuosa decoración basada en dorados”, la palabra “suntuosa” corresponde a un adjetivo,  y especifica los elementos clave (\"decoración basada en dorados\") por lo que se confirma que se presenta una descripción sobre la obra del artista. Seguidamente, se presenta el enlace “aunque”, el cual es un conector de oposición. Posteriormente, menciona el tema recurrente de la obra del artista que, a su vez, es una causa que se liga con su consecuencia.  Por lo anterior, la opción correcta es la 3.",
      "area": 2,
      "dificultad": 2,
      "peso": 12,
      "pista": "Identifique los vínculos que se establecen dentro de las oraciones para mostrar la conexión entre ellas: oposición, causa-efecto, condición, etc.",
      "estado": 1
},
{
  "id": 102,
  "title": "Información en la era digital",
  "content": "Considere las siguientes afirmaciones:<div class=\"citation-box\">    <b>A.</b> Instagram es el sitio de Internet que acumula más imágenes y no para de crecer.<br/><br/><b>B.</b> Los avances tecnológicos han convertido la producción de información en un acto masivo.<br/><br/><b>C.</b> Los tiempos actuales funcionan a otro ritmo, distinto a la capacidad humana para procesar la información.<br/><br/><b>D.</b> La producción de información no será algo exclusivamente humano, sino que todos los nodos (personas o elementos) conectados a la red serán capaces de emitir información.<br/><br/> <div class=\"citation-source\">(Cosials, 2015)</div>  </div>  <p style=\"margin-top: 20px;\">¿Cuál de las afirmaciones anteriores es diferente con respecto al conjunto de ideas?</p>",
  "options": [
      "A",
      "B",
      "C",
      "D"],
  "correctAnswer": 0,
  "explanation": "En este ítem es necesario revisar las afirmaciones para identificar aquella que difiere del resto. Las afirmaciones B y D se refieren a cómo los avances tecnológicos influyen en la producción de información, además, señalan que esta puede generarse tanto por personas como por otros elementos conectados a la red. La afirmación C, por su parte, destaca que la capacidad humana para procesar información presenta cambios en la actualidad. En contraste, la afirmación A presenta un ejemplo específico sobre el crecimiento de una red social en particular. Por ello, las afirmaciones B, C y D mantienen una relación temática entre sí, mientras que la afirmación A es diferente dentro del grupo. Por tanto, la opción correcta es la 1.",
      "area": 2,
      "dificultad": 2,
      "peso": 12,
      "pista": "Observe que un enunciado brinda un ejemplo de la información.",
      "estado": 1
}
];
