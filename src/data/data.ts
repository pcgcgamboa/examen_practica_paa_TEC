[
  {
    id: 1,
    title: "Pregunta de Examen",
    content: "Si mi prima es hija de la hermana de mi madre, ¿qué relación tiene conmigo la abuelita materna de la hija de mi prima?",
    options: [
      "Tía",
      "Prima",
      "Madre",
      "Abuela"
    ],
    correctAnswer: 0,
    explanation: "En este ítem se requiere analizar la información dada para identificar las relaciones familiares. Una posible estrategia es construir un diagrama para organizar la información, como el siguiente:\n<div class=\"latex-centered\"><img src=\"./figuras/m_1.png\" alt=\"Diagrama Familiar\"></div>\nDe acuerdo con el diagrama, la madre de mi prima es mi tía. Luego, la abuela de la hija de mi prima, es la madre de mi prima, quien es mi tía. Por lo tanto, la opción correcta es la 1."
  },
  {
    id: 2,
    title: "Pregunta de Examen",
    content: "Se tienen tres lapiceros X, Y y Z:  dos son verdes y uno es rojo; además, X y Y son de diferente color.\n\t\t\n\t\tConsidere las siguientes proposiciones:\n\t\t<ol><li><strong>A.</strong> Y es verde.</li><li><strong>B.</strong> Z es verde.</li><li><strong>C.</strong> X es verde.</li></ol>\n\t\tDe las anteriores, ¿cuáles se cumplen con certeza?",
    options: [
      "Solo B",
      "Solo C",
      "B y C",
      "A y B"
    ],
    correctAnswer: 0,
    explanation: "Una posible estrategia para identificar las distintas posibilidades es organizar la información mediante tablas. De esta manera, se pueden construir los siguientes escenarios:\n\t<div class=\"latex-centered\"><span style=\"display:inline-block; width:1cm;\"></span>\n\t\t<table class=\"latex-table\"><tr><td>Colores / Lapicero</td><td>X</td><td>Y</td><td>Z</td></tr><tr><td>Verde</td><td>✓</td><td></td><td>✓</td></tr><tr><td>Rojo</td><td></td><td>✓</td><td></td></tr></table>\n\t\t<span style=\"display:inline-block; width:1cm;\"></span>\n\t\t\n\t\t<div style=\"height:0.5cm;\"></div>\n\t\t<table class=\"latex-table\"><tr><td>Colores / Lapicero</td><td>X</td><td>Y</td><td>Z</td></tr><tr><td>Verde</td><td></td><td>✓</td><td>✓</td></tr><tr><td>Rojo</td><td>✓</td><td></td><td></td></tr></table></div>\n\tDel análisis de los escenarios posibles, las proposiciones A y C no se pueden establecer con certeza y solo B ocurre en ambos. Por lo tanto, la opción correcta es la 1."
  },
  {
    id: 3,
    title: "Ejercicio de Matemáticas",
    content: "Suponga que para cinco números representados por $V,W,X,Y$ y $Z$ se sabe que:\n<ul><li>$V$ es el doble de $W$ y a lo sumo tiene el valor de $Y$.</li><li>El valor de $X$ junto con el de $Z$ representan el valor de $W$.</li></ul>Considere las siguientes afirmaciones:\n<ol><li><strong>A.</strong> $Y$ es el doble de $W$.</li><li><strong>B.</strong> $Y$ es más que el doble de $X$.</li><li><strong>C.</strong> $Z$ es al menos la mitad de $W$.</li></ol>\nDe las afirmaciones anteriores, ¿cuáles se cumplen con certeza?<br>",
    options: [
      "A y B",
      "Solo C",
      "A y C",
      "Solo B"
    ],
    correctAnswer: 3,
    explanation: "Para facilitar el razonamiento, las premisas pueden expresarse mediante relaciones matemáticas:\n$$\n\\text{1. } V = 2W \\quad \\mbox{y} \\quad V \\leq Y\n$$  \n$$\n\\text{2. } X + Z = W\n$$  <br>Con estas expresiones, se analiza cada afirmación: <br>\n<br>\n<b>A. $Y$ es el doble de $W$.</b>  \nSegún las premisas, \\( Y \\geq V = 2W \\), pero \\( Y \\) no necesariamente es igual a \\( 2W \\); puede ser mayor. Por lo tanto, esta afirmación no se cumple con certeza. <br>\n<br>\n<b>B. $Y$ es más que el doble de $X$.</b>  \nReemplazando \\( W = X + Z \\) en \\( V = 2W \\), se obtiene:  \n$$\nV = 2(X + Z) = 2X + 2Z.\n$$  \nDado que \\( V \\leq Y \\), se concluye que \\( Y \\geq 2X + 2Z \\). Por lo tanto, \\( Y \\) siempre será mayor que \\( 2X \\), y esta afirmación es correcta. <br>\n<br>\n<b>C. $Z$ es al menos la mitad de $W$.</b>  \nDe \\( W = X + Z \\), no es posible determinar con certeza que \\( Z \\geq \\frac{W}{2} \\), ya que \\( Z \\) depende de \\( X \\), cuya relación específica no se establece en las premisas. Por lo tanto, esta afirmación no se cumple con certeza.  Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 4,
    title: "Ejercicio de Lógica",
    content: "Hay tres  personas: Jorge, Lorena y Arturo que viven en provincias distintas: San José, Alajuela y Puntarenas, y tienen apellidos distintos: Berrocal, Castro y Soto.  Se sabe que:<br><ul><li>Jorge no vive en San José ni Lorena en Alajuela.</li><li>El que vive en Puntarenas es de apellido Soto.</li><li>El que vive en San José no es de apellido Berrocal.</li><li>Lorena no es de apellido Berrocal ni Castro.</li></ul><br>Con certeza, ¿dónde vive Arturo y cuál es su apellido?<br>",
    options: [
      "Alajuela - Castro",
      "San José - Castro",
      "Puntarenas - Soto",
      "Alajuela - Berrocal"
    ],
    correctAnswer: 1,
    explanation: "En este ítem se requiere analizar la información dada para identificar el apellido y el lugar de residencia de las tres personas. Una posible estrategia es analizar por separado los datos proporcionados :\n<ul><li><b>Jorge no vive en San José.</b><br>  \n    Por lo tanto, Jorge debe vivir en Alajuela o Puntarenas.</li><li><b>Lorena no vive en Alajuela.</b><br>  \n    Esto implica que Lorena vive en San José o Puntarenas.</li><li><b>Lorena no es de apellido Berrocal ni Castro.</b><br>  \n    Por descarte, Lorena es de apellido Soto.</li><li><b>La persona que vive en Puntarenas tiene el apellido Soto.</b><br>  \n    Como Lorena es de apellido Soto, ella debe vivir en Puntarenas.</li><li><b>Jorge no vive en San José y Lorena vive en Puntarenas.</b><br>  \n    Esto significa que Jorge vive en Alajuela.</li><li><b>El que vive en San José no tiene el apellido Berrocal.</b><br>  \n    Así que tiene apellido Soto o Castro.</li></ul>Dado que Lorena es de apellido Soto y vive en Puntarenas, y Jorge vive en Alajuela, entonces Arturo vive en San José y su apellido es Castro. Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 5,
    title: "Ejercicio de Lógica",
    content: "Considere la siguiente información:\n<ul><li>Cada una de las letras $A$, $O$, $P$ y $Z$ representa una cifra del 0 al 9 distinta.</li><li>$Z=1$</li></ul>\nCon base en la información anterior, en la expresión\n$$(ZO)^2=PAO $$\n¿Cuál es el valor de $PA$?",
    options: [
      "12",
      "22",
      "25",
      "40"
    ],
    correctAnswer: 2,
    explanation: "En este ítem se requiere analizar la información dada para identificar el valor de PA. Una posible estrategia es realizar pruebas con valores específicos para las letras. <br>Por ejemplo, si $O=2$, tenemos:$$\\left(12\\right)^2 = 144$$\nEsto implica que $O=2$ y $O=4$, lo cual es imposible porque una misma letra no puede representar dígitos distintos. Ahora, probemos con $O=5$:\n$$\\left(15\\right)^2 = 225$$\nEsto satisface la igualdad, ya que $O=5$ aparece de forma consistente en ambos lados de la ecuación.<br> <br>\nUna vez realizado este descarte se tiene que los únicos valores posibles para $O$ son el 0, 1, 5 y 6:\n    <ul><li>Si $O=0$, entonces $\\left(10\\right)^2 = 100$, lo que implica $P=1$, $A=0$, $O=0$ y $Z=1$.</li><li>Si $O=1$, entonces $\\left(11\\right)^2 = 121$, lo que implica $P=1$, $A=2$, $O=1$ y $Z=1$.</li><li>Si $O=5$, entonces $\\left(15\\right)^2 = 225$, lo que implica $P=2$, $A=2$, $O=5$ y $Z=1$.</li><li>Si $O=6$, entonces $\\left(16\\right)^2 = 256$, lo que implica $P=2$, $A=5$, $O=6$ y $Z=1$.</li></ul>\n    \nDe estos casos, el único que cumple con la condición de que las letras diferentes representen cifras distintas es cuando $P=2$, $A=5$, $O=6$ y $Z=1$. Por lo que  el valor de $PA$ es $25$ y la opción correcta es la 3.<br>"
  },
  {
    id: 6,
    title: "Criptoaritmética",
    content: "Considere las letras C, D, E, I, N, O, R, S, T que representan cifras del 0 al 9 y {\\bf cada letra representa una cifra distinta}. Si se sabe que:\n<ul><li>$S+S=D+R$</li><li>$C=1$</li><li>$T=9$</li></ul>\ny además:\n<div style=\"text-align:center\">\n\t \n\t\n\t<div class=\"tikz-visual-marker\"><img src=\"./figuras/m_6.png\" alt=\"Cálculo\"></div>\n</div>\nConsidere las siguientes proposiciones basadas en las condiciones anteriores:\n<ol>\n  <li><strong>A.</strong> Si $S=6$, entonces $N=3$</li><li><strong>B.</strong> Si $S=7$, entonces $N=5$ </li><li><strong>C.</strong> Si $S=8$, entonces $N=7$</li></ol>\n\nDe las anteriores, ¿cuales son verdaderas?",
    options: [
      "Solo A",
      "Solo B",
      "A y C",
      "B y C"
    ],
    correctAnswer: 0,
    explanation: "<p>En este &iacute;tem se requiere analizar la informaci&oacute;n dada para identificar la viabilidad de cada proposici&oacute;n, tomando en cuenta que cada letra representa un n&uacute;mero diferente del 0 al 9. Para ello, se debe analizar cada posible valor para $S$. De esta manera:</p><ul><li>Para <span class=\"fbox\">$S=6$</span><br />Considere que $S+S=12$. A partir de ello, se puede determinar que $O=2$. Ahora bien, note que por hip&oacute;tesis $C=1$, por lo que la suma $1 + 2 + E=11$ y as&iacute; $E=8$. Seguidamente, al ser $T=9$, se debe sumar una unidad para cumplir con $C=1$ al efectuar la operaci&oacute;n $D+R$ que es igual a $12$. Observe el siguiente esquema con la informaci&oacute;n descrita:<div class=\"contenedor-zoom\"><img src=\"./figuras/suma1.png\" alt=\"Suma\" width=\"500\" height=\"500\" /></div><br />Note que la condici&oacute;n de $D+R=12$ se cumple para valores distintos entre s&iacute; con respecto a las dem&aacute;s, por lo que se deben considerar aquellos valores para $D$ y $R$ que no hayan sido designados anteriormente. Para $D+R=12$ se tienen los siguientes casos:<ul><li>5 + 7 = 12</li><li>7 + 5 = 12</li></ul></li></ul><p style=\"padding-left: 40px;\">Por lo tanto, A es una proposici&oacute;n verdadera.</p><ul><li>Para <span class=\"fbox\">$S=7$</span><br />Con el mismo razonamiento, note que $S+S=14$. A partir de ello, se puede determinar que $O=4$. Ahora bien, note que por hip&oacute;tesis $C=1$, por lo que la suma $1 + 4 + E=11$ y as&iacute; $E=6$. De igual manera, se sabe que $D+R$ es igual a $14$. Observe el siguiente esquema con la informaci&oacute;n descrita:</li></ul><p style=\"padding-left: 40px;\"><div class=\"contenedor-zoom\"><img src=\"./figuras/suma2.png\" alt=\"Suma\" /></div></p><p style=\"padding-left: 40px;\">Note que la condici&oacute;n de $D+R=14$ debe cumplirse para valores distintos entre s&iacute; con respecto a las dem&aacute;s, por lo que se deben considerar aquellos valores para $D$ y $R$ que no hayan sido designados anteriormente. Para $D+R=14$ no existen n&uacute;meros diferentes a los utilizados previamente que den como resultado 14.<br />Por lo que B es una proposici&oacute;n falsa.</p><ul><li>Para <span class=\"fbox\">$S=8$</span><br />Con el mismo razonamiento, note que $S+S=16$. A partir de ello, se puede determinar que $O=6$. Ahora bien, note que por hip&oacute;tesis $C=1$, por lo que la suma $1 + 6 + E=11$ y as&iacute; $E=4$.De igual manera, se sabe que $D+R$ es igual a $16$. Observe el siguiente esquema con la informaci&oacute;n descrita:</li></ul><div style=\"padding-left: 40px;\"> \t<div class=\"contenedor-zoom\" style=\"padding-left: 40px;\"><img src=\"./figuras/suma3.png\" alt=\"Suma\" /></div></div><p style=\"padding-left: 40px;\">Note que la condici&oacute;n de $D+R=16$ debe cumplirse para valores distintos entre s&iacute; con respecto a las dem&aacute;s, por lo que se deben considerar aquellos valores para $D$ y $R$ que no hayan sido designados anteriormente. Para $D+R=16$ no existen n&uacute;meros diferentes a los utilizados previamente que den como resultado 16.<br />Por lo que C es una proposici&oacute;n falsa.</p><br><p>Por lo tanto, la opci&oacute;n correcta es la 1.</p><br><p>Una explicaci&oacute;n alternativa es la siguiente: como $T=9$, entonces $I = 0$; adem&aacute;s, como en cada caso se da el valor de $S$, es posible determinar el valor de $O$ y el de $N$. Por ejemplo, si $S=6$, entonces $O=2$ ($S+S=12$) y $N=3$ (una unidad m&aacute;s). Tambi&eacute;n, al conocer $O$ y $C$ es posible determinar $E$ (pues $E+O =10$, para que al hacer la suma y llevar una unidad el resultado sea 11, ya que $C=1$). Con esta informaci&oacute;n se construye la siguiente tabla:</p><div style=\"text-align: center;\"><table class=\"latex-table\"><tbody><tr><th>Casos</th><th>$C$</th><th>$D$</th><th>$E$</th><th>$I$</th><th>$N$</th><th>$O$</th><th>$R$</th><th>$S$</th><th>$T$</th><th>$D+R=2S$</th></tr><tr><td>$S=6$</td><td>1</td><td>&nbsp;</td><td>8</td><td>0</td><td>3</td><td>2</td><td>&nbsp;</td><td>6</td><td>9</td><td>12</td></tr><tr><td>$S=7$</td><td>1</td><td>&nbsp;</td><td>6</td><td>0</td><td>5</td><td>4</td><td>&nbsp;</td><td>7</td><td>9</td><td>14</td></tr><tr><td>$S=8$</td><td>1</td><td>&nbsp;</td><td>4</td><td>0</td><td>7</td><td>6</td><td>&nbsp;</td><td>8</td><td>9</td><td>16</td></tr></tbody></table></div><p>Ahora los d&iacute;gitos que faltan por asignar son:</p><div style=\"text-align: center;\"><table class=\"latex-table\"><tbody><tr><th>Casos</th><th>$C$</th><th>$D$</th><th>$E$</th><th>$I$</th><th>$N$</th><th>$O$</th><th>$R$</th><th>$S$</th><th>$T$</th><th>$D+R=2S$</th><th>D&iacute;gitos que faltan</th><th>$D+R$</th></tr><tr><td>$S=6$</td><td>1</td><td>&nbsp;</td><td>8</td><td>0</td><td>3</td><td>2</td><td>&nbsp;</td><td>6</td><td>9</td><td>12</td><td>4,5,7</td><td>7+5=12</td></tr><tr><td>$S=7$</td><td>1</td><td>&nbsp;</td><td>6</td><td>0</td><td>5</td><td>4</td><td>&nbsp;</td><td>7</td><td>9</td><td>14</td><td>2,3,8</td><td>No viable</td></tr><tr><td>$S=8$</td><td>1</td><td>&nbsp;</td><td>4</td><td>0</td><td>7</td><td>6</td><td>&nbsp;</td><td>8</td><td>9</td><td>16</td><td>2,3,4</td><td>No viable</td></tr></tbody></table></div><p>Solo en la opci&oacute;n A es posible que $D+R =2S$.</p>"
  },
  {
    id: 7,
    title: "Criptoaritmética",
    content: "Considere las siguientes premisas:\n<ul><li><b>Premisa 1:</b> Todos los ciervos tienen cuernos.</li><li><b>Premisa 2:</b> Algunos rumiantes son ciervos.</li></ul>\nDe las premisas anteriores se sigue que",
    options: [
      "algunos ciervos no son rumiantes.",
      "algunos rumiantes tienen cuernos.",
      "todos los rumiantes tienen cuernos.",
      "algunos rumiantes no tienen cuernos."
    ],
    correctAnswer: 1,
    explanation: "</div>\n En  este ítem  se  requiere  analizar  la  información  dada por las premisas, que se puede ilustrar mediante un diagrama como el siguiente:\n <div style=\"text-align:center\"> <div class=\"contenedor-zoom22\"><img src=\"./figuras/m_7.png\" alt=\"Suma\"></div>\n </div>\n \n La premisa 1 denota que todos los ciervos tienen cuernos, pero la premisa 2 indica que de todos los rumiantes solo algunos son ciervos. De esta manera, según la información dada,  solamente se puede concluir con certeza que algunos rumiantes tienen cuernos. Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 8,
    title: "Criptoaritmética",
    content: "Considere las siguientes premisas:<br><ul><li><b>Premisa 1:</b> Toda conferencia es discurso.</li><li><b>Premisa 2:</b> Algunas conferencias no son lecciones.</li></ul><br>De las premisas anteriores se sigue que",
    options: [
      "ninguna lección es discurso.",
      "todas las lecciones son discursos.",
      "algunos discursos no son lecciones.",
      "todos los discursos son conferencias."
    ],
    correctAnswer: 2,
    explanation: "</div>\nEn  este ítem  se  requiere  analizar  la  información  dada por las premisas, que se puede ilustrar mediante un diagrama como el siguiente:\n\ <div style=\"text-align:center\"><div class=\"contenedor-zoom22\"><img src=\"./figuras/m_8.png\" alt=\"Diagrama\"></div>\n </div> \n \n La premisa 1 denota que todas las conferencias son discursos y la premisa 2 indica que de todas las conferencias algunas no son lecciones (parte sombreada), pero no se puede asegurar que todas las lecciones sean discursos (parte blanca). De esta manera, según la información dada,  solamente se puede concluir con certeza que algunos discursos no son lecciones. Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 9,
    title: "Ejercicio de Lógica",
    content: "Considere las siguientes premisas:\n<ul><li><b>Premisa 1:</b> Todos los músicos coleccionan carteles.</li><li><b>Premisa 2:</b> $P$ no es músico y $Q$ no colecciona carteles.</li></ul><br>Considere las siguientes afirmaciones:<br><ul class=\"custom-list\">\n\t<li><b style=\"color:var(--primary)\">A.</b>  $P$ no colecciona carteles.\n\t\n\t<li><b style=\"color:var(--primary)\">B.</b>  $Q$ no es músico.\n\t\n\t<li><b style=\"color:var(--primary)\">C.</b>  $P$ colecciona carteles.\n\t\n</ul><br>De las anteriores, ¿cuáles se cumplen con certeza?<br>",
    options: [
      "Solo A",
      "Solo B",
      "A y B",
      "B y C"
    ],
    correctAnswer: 1,
    explanation: "En  este ítem  se  requiere  analizar  la  información  dada por las premisas, lo cual se puede ilustrar mediante un diagrama como el siguiente:\n <div class=\"latex-centered\"><div class=\"contenedor-zoom22\"><img src=\"./figuras/m_9.png\" alt=\"Diagrama\"></div>\n </div>\n \n La premisa 1 denota que todos los músicos coleccionan carteles, pero observe que pueden existir no músicos que también coleccionen carteles.  La premisa 2 indica que $P$ no es músico, por lo cual <b>no</b> se puede concluir con certeza si colecciona carteles o no. En el caso de $Q$, se cumple con certeza que, al no tener carteles, no es músico.  Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 11,
    title: "Ejercicio de Lógica",
    content: "Considere las siguientes premisas:\n<ul><li><b>Premisa 1:</b> Si V lee, entonces L dibuja o J salta.</li><li><b>Premisa 2:</b> Si L dibuja, entonces P no corre.</li><li><b>Premisa 3:</b> L no dibuja y J no salta.</li></ul>\nDe las premisas anteriores se sigue que<br>",
    options: [
      "V lee.",
      "P corre.",
      "V no lee.",
      "P no corre."
    ],
    correctAnswer: 2,
    explanation: "En este ítem se requiere concatenar las premisas, no necesariamente en el orden dado, para extraer una conclusión lógica. En este caso se puede empezar con la premisa 3 porque se puede separar en dos ideas, ambas ciertas. Según la premisa 3, como L no dibuja y tampoco J salta, entonces se deduce que V no lee, según la premisa 1.  Que L no dibuje no necesariamente significa que P corra, por lo que la premisa 2 no aporta ninguna conclusión válida.  Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 12,
    title: "Ejercicio de Lógica",
    content: "Considere las siguientes premisas:<br><ul><li><b>Premisa 1:</b> Si $A$ es un muchacho, entonces $A$ es más joven que $J$.</li><li><b>Premisa 2:</b> Si $A$ no tiene 14 años, entonces $A$ no es más  joven que $J$.</li><li><b>Premisa 3:</b> $A$ no tiene 14 años.</li></ul><br>De las premisas anteriores se sigue que<br>",
    options: [
      "A es menor que J.",
      "J es menor que A.",
      "J es un muchacho.",
      "A no es un muchacho."
    ],
    correctAnswer: 3,
    explanation: "En este ítem se requiere concatenar las premisas, no necesariamente en el orden dado, para extraer una conclusión lógica. En este caso una forma equivalente de escribir la premisa 1, es que si $A$ no es más joven que $J$  entonces $A$ no es muchacho. Con base en la premisa 3 se tiene con certeza que A no es más joven que $J$ y así $A$ no es un muchacho. Una explicación alternativa: de la premisa 3 se sabe que A no tiene 14 años, por lo tanto usando la premisa 2 se concluye que A no es más joven que J. Finalmente, de la premisa 1 se concluye que A no es un muchacho, pues de lo contrario A sería más joven que J. Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 13,
    title: "Ejercicio de Lógica",
    content: "Considere las siguientes premisas:<br><ul><li><b>Premisa 1:</b> Todo $C$ es $S$.</li><li><b>Premisa 2:</b> Ningún $E$ es $T$.</li><li><b>Premisa 3:</b> Todo $S$ es $T$.</li></ul><br>De las anteriores se sigue que<br>",
    options: [
      "todo S es E.",
      "todo C no es E.",
      "algunos S  son E.",
      "algunos T son E."
    ],
    correctAnswer: 1,
    explanation: "Para este ítem se debe concatenar las premisas, no necesariamente en el orden dado. Según la premisa 1 todo $C$ es $S$ y como todo $S$ es $T$ se concluye que todo $C$ es $T$. Además, como en la premisa 2 se establece que ningún $E$ es $T$, y ya se sabe que todo $C$ es $T$, se concluye que todo $C$ no es $E$. Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 14,
    title: "Ejercicio de Lógica",
    content: "Considere la siguiente secuencia:\n\t$$1,\\;5,\\;14,\\;30,\\;55,\\ldots$$ \n\t\n\t\n\t\n\t\n\t\n\t\n\t¿Cuál es el sétimo término de esta secuencia?\n\t<br>",
    options: [
      "79",
      "91",
      "104",
      "140"
    ],
    correctAnswer: 3,
    explanation: "<br> En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia. Una estrategia para identificar el patrón es la siguiente:\n \n<div class=\"latex-centered\">\n  } <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>  \n</div>\nDe este modo, se tiene que $5=1+2^2$. Luego\n<div class=\"latex-centered\">\n  } <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>  \n</div>\nEntonces, se tiene que $14=5+3^2$.<br>\n<br>\nSegún este patrón, se puede construir el siguiente esquema:\n<div class=\"latex-centered\"><br>} <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>    \n</div><br>De esta manera, el sétimo término sería $91+(7)^{2}=140$. Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 14,
    title: "Ejercicio de Lógica",
    content: "Considere la siguiente secuencia:\n\t$$-1, 1, 0, 1, 1, 2, 3, 5, p$$\n\t¿Cuál es el valor de $p$?\n\t<br>",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correctAnswer: 3,
    explanation: "En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia. Se puede empezar identificando que la suma de los dos primeros términos genera el tercero: $-1+1=0$. Luego, al sumar el segundo y el tercer término se obtiene el cuarto $1+0=1$. De esta manera se verifican los demás términos y al sumar los últimos dos se tiene que $p=5+3=8$. Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 15,
    title: "Ejercicio de Lógica",
    content: "\\item Considere la siguiente secuencia, donde $n$ es un número entero positivo:\n<div class=\"latex-centered\">\n\t$3n-1$, $3n+2$, $3n+x$, $3n+8$,...\n</div><br>¿Cuál es el valor de $x$?<br>",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2,
    explanation: "<br> En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia. Es importante destacar que la expresión $3n$ es constante en todos los términos, por lo que se puede reescribir de la siguiente manera: \n $$-1, 2, x, 8, ...$$Una estrategia para identificar el patrón es la siguiente:\n \n<div class=\"latex-centered\">\n  } <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>  \n</div>\nSiguiendo el mismo razonamiento, se puede plantear que: \n<div class=\"latex-centered\">\n  } <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>  \n</div>\nLuego, se podría asumir que $x= 2+3 = 5$.<br>\n<br>\nFinalmente, se verifica el patrón con el siguiente término de la sucesión:\n<div class=\"latex-centered\"><br>} <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>    \n</div><br>Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 16,
    title: "Ejercicio de Lógica",
    content: "Considere la siguiente secuencia de pares ordenados:<br>$$\\left(1,2 \\right),  \\; \\left(3,8 \\right), \\; \\left(7,26 \\right),  \\; \\left(b,80 \\right),  \\; \\left(31,a \\right),  \\;  \\left(63,728 \\right), \\; \\cdots $$\t\t<br>¿Cuál es el valor de $a+b$?\n\t<br>",
    options: [
      "255",
      "256",
      "257",
      "258"
    ],
    correctAnswer: 2,
    explanation: "<br> En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia, tanto para los primeros como los segundos elementos de cada par ordenado. Note que el conjunto de los primeros elementos está dado por: $$M=\\{1,\\;3,\\;7,\\;b,\\;31,\\;63,...\\}$$ Y el conjunto para los segundos elementos es: $$N=\\{2,\\;8,\\;26,\\;80,\\;a,\\;728,...\\}$$\n  En ambos conjuntos se observa un incremento no constante entre cada elemento, es decir, no se aumenta un mismo valor para determinar cada uno de ellos. <br>\n <br>\n Para el conjunto $M$, note que la diferencia entre los elementos se incrementa en múltiplos de 2, lo cual indica que cada uno tiene la forma $2^n- 1$ con $n$ la posición de cada elemento. \n<div class=\"latex-centered\"><br>} <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>\n</div>\nEn tal caso, como $b$  está en la cuarta posición se tiene que $n=4$  con lo cual\n$$b=2^4-1=16-1=15$$\nPara el conjunto $N$, note que la diferencia entre los elementos se incrementa en múltiplos de 3, lo cual significa que cada elemento tiene la forma $3^n- 1$ con $n$ la posición de cada elemento:\n<div class=\"latex-centered\"><br>} <br><div class=\"contenedor-zoom22\"><img src=\"./figuras/falta.png\" alt=\"Suma\"></div>\n</div>\nEn tal caso, como $a$  está en la quinta posición se tiene que $n=5$  con lo cual\n$$a=3^5-1=243-1=242$$\nDe esta forma, el valor de $a+b=242+15=257$. Por lo tanto, la opción correcta es la 3. <br>"
  },
  {
    id: 17,
    title: "Pregunta Matemática",
    content: "Considere la siguiente secuencia:<br>$$\\displaystyle{\\frac{1}{n^2+1}},\\displaystyle{\\frac{3}{n^4+2}}, \\displaystyle{\\frac{5}{n^6+3}}, \\; \\ldots$$ <br>¿Cuál es la expresión que continúa la secuencia?<br>",
    options: [
      "$\\dfrac{7}{n^8+3}$",
      "$\\dfrac{6}{n^8+3}$",
      "$\\dfrac{7}{n^8+4}$",
      "$\\dfrac{7}{n^8+5}$"
    ],
    correctAnswer: 2,
    explanation: "En este ítem se requiere identificar el patrón que permite construir cada término de la secuencia. Una estrategia es analizar el patrón del numerador y del denominador por separado.  Se tiene que el valor del numerador aumenta en dos unidades, mientras que en el denominador, el exponente de $n$ del primer sumando también aumenta en dos unidades y cada valor del segundo sumando aumenta en una unidad. Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 18,
    title: "Pregunta Matemática",
    content: "Considere la siguiente secuencia:\n\t\n\t$$\\dfrac{1}{1}\\, , \\dfrac{2}{1+3}\\, , \\dfrac{6}{1+3+5}\\, , \\dfrac{x}{w}\\, , \\dfrac{z}{y}$$ \n\t\n\t¿Cuál es el valor de $z+y$?",
    options: [
      "$40$",
      "$46$",
      "$47$",
      "$56$"
    ],
    correctAnswer: 3,
    explanation: "En este ítem se requiere identificar el patrón que se sigue para obtener cada término de la secuencia, tanto para los numeradores como  para los denominadores de cada fracción.<br>\nObserve que el conjunto de los numeradores está dado por:\n$$N= \\left\\{ 1,\\;2,\\;6,\\;x,\\;z,... \\right\\}$$\nPor su parte, el conjunto de los denominadores está dado por:\n$$D= \\left\\{ 1,\\;1+3,\\;1+3+5,\\;w,\\;y,... \\right\\}$$\nNote que el patrón en el conjunto de los denominadores consiste en sumar el siguiente número impar, por lo que:\n$$w=1+3+5+7$$\n$$y=1+3+5+7+9=25$$\nEn el caso de los  numeradores, estos se construyen sumando el numerador y   denominador de la fracción anterior, por lo que:\n$$1+1=2$$\n$$2+(1+3)=6$$\n$$x=6+(1+3+5)=15$$\n$$z=15+(1+3+5+7)=31$$\nAsí que la suma solicitada es\n$$ z+y=31+25=56$$\nPor tanto, la opción correcta es la 4.<br>"
  },
  {
    id: 19,
    title: "Pregunta",
    content: "Analice el siguiente patrón:<br><div class=\"latex-centered\">\n\t1<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 5<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br> \n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 9<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 7 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<br>\n</div><br>Si se continúa con el mismo patrón, ¿en cuál  fila la suma de sus números sobrepasa por primera vez 96?<br> <br>",
    options: [
      "Sétima",
      "Octava",
      "Novena",
      "Décima"
    ],
    correctAnswer: 1,
    explanation: "En este ítem se debe identificar el patrón que se sigue para construir cada fila. De esta manera, se tiene que cada término es la suma de los dos elementos inmediatamente superiores de la fila anterior. Por ejemplo, el 9 de la fila 5 es la suma de 4 y 5 de la fila cuatro. El mismo razonamiento aplica en las filas siguientes, por lo tanto, se deben construir las filas necesarias para verificar que la suma de sus elementos sobrepase por primera vez 96, como se comprueba en la siguiente figura:\n\\vspace{-0.3cm}\n<div class=\"latex-centered\">\n\t1<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>1<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 3<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>6<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 5<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>12<br> \n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 9<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 7 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>24<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 6 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 14<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 16 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 9<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>2=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>48<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 7 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 20<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 30 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 25<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>11<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>2=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>96<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 8 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 27<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 50 <span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span> 55<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>36<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>13+<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>2=<span class=\"latex-hspace\" style=\"margin-left: 0.25cm;\"></span>192<br>\n</div>\nPor lo tanto, la opción correcta es la 2.<br>"
  },
  {
    id: 20,
    title: "Pregunta",
    content: "Considere el siguiente patrón:\n<div class=\"latex-centered\">\n\t1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 6<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>\n\t\n</div><br>A este patrón se le pueden seguir agregando filas. Cada número interior del triángulo está rodeado por otros 6 números. Por ejemplo, 4 está rodeado por $1,1,3,6,10$ y 5.<br>\\vspace{0,5cm}\nConsidere las siguientes afirmaciones:\n\n\t<li><b style=\"color:var(--primary)\">A.</b>  El número 50 estará en la fila 49.\n\t<li><b style=\"color:var(--primary)\">B.</b> Hay un número rodeado solo de números impares. \n\t<li><b style=\"color:var(--primary)\">C.</b>  El 28 está dentro del grupo de números que rodea al 7.\n\t\n<br>De las anteriores, ¿cuáles se cumplen con certeza?<br>",
    options: [
      "A y B",
      "B y C",
      "Solo B",
      "Solo C"
    ],
    correctAnswer: 1,
    explanation: "En la resolución de este ítem es importante empezar por el análisis de la veracidad de cada afirmación por separado.\n\n    \\item La afirmación A es falsa. Tome en cuenta que en una misma fila no se encuentra el valor del número de fila y su consecutivo, ya que cada término es la suma de los dos elementos inmediatamente superiores de la fila anterior. Por ejemplo, el 10 de la fila 6 es la suma del 6 y el 4 de la fila cinco.\n    \\item La afirmación B es verdadera. Se puede notar que el 2 está rodeado por 1, 1, 1, 3, 3, 1.\n    \\item La afirmación C es verdadera. Al agregar las filas 7, 8 y 9 se comprueba.\n    <div class=\"latex-centered\">\n\t1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 2<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 3<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br> 1 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 6<span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 4 <span class=\"latex-hspace\" style=\"margin-left: 0.5cm;\"></span> 1<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 10 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 5 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 6 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 15<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 20 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 15 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 6 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <span class=\"fbox\">7</span> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 21<span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 35 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 35 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 21 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <span class=\"fbox\">7</span> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br>\n\t1 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 8 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <b>28</b> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 56 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 70 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 56 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> <b>28</b> <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 8 <span class=\"latex-hspace\" style=\"margin-left: 0.3cm;\"></span> 1<br><br></div>\n \n\t\nPor lo tanto, la opción correcta es la 2.<br>"
  },
  {
    id: 21,
    title: "Pregunta",
    content: "¿Cuál es el último dígito del número $2545\\cdot5^{117}+1$?\n\t<br>",
    options: [
      "0",
      "1",
      "5",
      "6"
    ],
    correctAnswer: 3,
    explanation: "Para la resolución de este ítem, se debe tener en cuenta que en cualquier potencia de base cinco el último dígito es 5, ya que al multiplicar números terminados en cinco, el producto también terminará en 5. \n$$5^1=\\underline{5}$$\n$$5^2=2\\underline{5}$$\n$$5^3=12\\underline{5}$$\n$$\\vdots$$\n$$5^{117}=\\ldots\\underline{5}$$\n Entonces, $5^{117}$ terminará en 5, al igual que $2545\\cdot5^{117}$, por lo que al sumarle el 1 se tiene que la última cifra será 6. Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 22,
    title: "Pregunta",
    content: "\\item Considere las siguientes equivalencias:\n<div class=\"latex-centered\">\n10 tazas de agua= 2000 ml<br>\n16 cucharadas de agua= 200 ml<br>\n</div>\n¿Cuántas tazas se obtienen de 240 cucharadas de agua?<br>",
    options: [
      "15",
      "24",
      "30",
      "48"
    ],
    correctAnswer: 3,
    explanation: "En este ítem se debe interpretar las equivalencias dadas para resolverlo. De la primera equivalencia se deduce que una taza de agua tiene 200 ml, lo que es equivalente a 16 cucharadas. De la segunda equivalencia, 240 cucharadas de agua equivalen a 15 veces 200 ml, por lo que se obtienen 15 tazas de agua. Por lo tanto, la opción correcta es la 1."
  },
  {
    id: 23,
    title: "Ejercicio",
    content: "Después de hacer una encuesta en la población A, conformada por 425 mujeres y 325 hombres, se obtiene la siguiente información:\n\t\n\t<div class=\"latex-centered\">\n\t\t<table class=\"latex-table\"><tr><td><b>Tipo de población</b></td><td><b>Total</b></td></tr><tr><td>Niños en escuela</td><td>225</td></tr><tr><td>Jóvenes en el colegio</td><td>175</td></tr><tr><td>Adultos menores de 65 años</td><td>250</td></tr><tr><td>Adultos mayores de 65 años</td><td>100</td></tr></table>\n\t</div>\t\n\t\n\tConsidere las siguientes afirmaciones:\n\t\n\t<li><b style=\"color:var(--primary)\">A.</b>  De cada 75 adultos mayores, 13 son mujeres.\n\t<li><b style=\"color:var(--primary)\">B.</b>  Por cada 7 colegiales hay 9 escolares.\n\t<li><b style=\"color:var(--primary)\">C.</b>  De cada 30 escolares, 13 son hombres.\n\t\n\tDe las afirmaciones anteriores, ¿cuáles se cumplen con certeza?",
    options: [
      "Solo B",
      "Solo C",
      "A y B",
      "B y C"
    ],
    correctAnswer: 0,
    explanation: "En este ítem se debe relacionar la información de la tabla con las tres afirmaciones. Un primer paso es calcular las siguientes proporciones:  $$\\dfrac{\\mbox{mujeres}}{\\mbox{total de encuestados}}=\\frac{425}{750}=\\frac{17}{30}$$\n\\vspace{0.2cm}\n$$\\dfrac{\\mbox{hombres}}{\\mbox{total de encuestados}}=\\frac{325}{750}=\\frac{13}{30}$$\n\\vspace{0.1cm}<br>\nCon estos datos se descartan las afirmaciones $A$ y $C$, pues no hay certeza de que la proporción entre hombres y mujeres sea constante en cada uno de los subgrupos. Luego hay que calcular la proporción entre colegiales y escolares (indiferente del género), que sería: $$\\dfrac{\\mbox{colegiales}}{\\mbox{escolares}}=\\dfrac{175}{225} = \\dfrac{7}{9}$$ Con este resultado se comprueba que la afirmación $B$ es verdadera (por cada 7 colegiales hay 9 escolares). Por lo tanto, la opción correcta es la 1."
  },
  {
    id: 1,
    title: "Ejercicio Matemático",
    content: "Una empresa dispone de tres contenedores con capacidad para 90 kg, 180 kg y 150 kg, respectivamente. En cada uno se colocan frijoles empacados en sacos con el mayor peso posible y con igual  peso en los tres contenedores. ¿Cuántos kilogramos debe pesar cada saco de frijoles?",
    options: [
      "15",
      "30",
      "45",
      "90"
    ],
    correctAnswer: 3,
    explanation: "En este ítem es necesario calcular el peso de los sacos de frijoles. Una manera es determinar los divisores de 90, 150 y 180 kilogramos para obtener el máximo divisor común, entonces se tiene que\nDivisores de 90= <b>1</b>, <b>2</b>, <b>3</b>, <b>5</b>, <b>6</b>, 9, <b>10</b>, <b>15</b>, 18, <b><span class=\"latex-underline\">30</span>\n</b>, 45, 90\nDivisores de 150= <b>1</b>, <b>2</b>, <b>3</b>, <b>5</b>, <b>6</b>, <b>10</b>, <b>15</b>, 25, <b><span class=\"latex-underline\">30</span></b>, 50, 75, 150\nDivisores de 180= <b>1</b>,  <b>2</b>,  <b>3</b>,  4,  <b>5</b>,  <b>6</b>,  9,  <b>10</b>,  12,  <b>15</b>,  18,  20,  <b><span class=\"latex-underline\">30</span></b>,  36,  45,  60,  90,  180\nAsí, se encuentra que el máximo común divisor en los tres contenedores es 30, entonces, se deben empacar los frijoles en sacos de 30 kilogramos para cumplir con las condiciones de máximo posible y el mismo peso. Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 25,
    title: "Ejercicio Matemático",
    content: "Una fábrica de una zona industrial tiene tres timbres para la realización de diferentes procesos. Uno suena cada hora y cuarto, el segundo cada hora y veinte, el tercero cada hora y media.  Si los tres suenan simultáneamente a las 10 de la mañana del domingo, ¿cuándo es la próxima vez que volverá a suceder?",
    options: [
      "A las 10 de la noche del lunes",
      "A las 10 de la noche del martes",
      "A las 10 de la mañana del jueves",
      "A las 10 de la mañana del miércoles"
    ],
    correctAnswer: 1,
    explanation: "Para resolver este ítem se debe identificar las equivalencias de tiempo: una hora y cuarto es equivalente a 75 minutos, una hora y veinte a 80 y una hora y media a 90, para así tener la duración de los tres timbres en minutos. Luego, se debe calcular el mínimo común múltiplo entre 75, 80 y 90 que es 3600. Es decir, volverán a sonar simultáneamente a los 3600 minutos o 60 horas a partir de las 10 de la mañana del domingo, lo que ocurrirá también a las 10 de la noche del martes. Por lo tanto, la opción correcta es la 2.<br>"
  },
  {
    id: 26,
    title: "Problema Algebraico",
    content: "Si hace 5 años la persona P tenía el cuádruplo de la edad de la persona Z y dentro de 5 años tendrá el doble de la edad de Z, ¿cuántos años tiene P?",
    options: [
      "15",
      "20",
      "25",
      "30"
    ],
    correctAnswer: 2,
    explanation: "Para este ítem se necesita simbolizar el enunciado. Sea $x$ la edad actual de $P$ y sea $y$ la de $Z$. De este modo:\n<ul class=\"latex-itemize\"><li>''Hace 5 años la persona P tenía el cuádruplo de la edad de la persona Z'' se simboliza como $(x-5)=4(y-5)$, o bien $$x-5=4y-20\\Leftrightarrow x=4y-15<span class=\"latex-eqno\">(a)</span>$$</li><li>''P dentro de 5 años tendrá el doble de la edad de Z'' se simboliza como $x+5=2(y+5)$, o bien \n    $$x+5=2y+10\\Leftrightarrow x=2y+5<span class=\"latex-eqno\">(b)</span>$$</li></ul>\nDe (a) y (b) se sigue que\n$$4y-15=2y+5\\Leftrightarrow 2y=20\\Leftrightarrow y=10$$\nLuego, la edad de P es $x=2\\cdot10+5=25$.  Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 27,
    title: "Torneo de Jugadores",
    content: "En un torneo participan 6 jugadores: $X,Y,Z,D,E$ y $F$ y cada uno se enfrenta a los demás. Se asignan tres puntos por cada gane y un punto por cada empate. Gana quien obtenga el mayor puntaje. En caso de empate se disputa otra ronda entre los jugadores empatados para obtener un vencedor.\n\nLa tabla final de resultados tiene la siguiente información:\n<div style=\"text-align:center; margin:15px 0;\">\n  \n\t\n\t<table class=\"latex-table\"><tbody><tr><td></td><td>Ganados</td><td>Empatados</td><td>Perdidos</td><td>Puntos totales</td></tr><tr><td>X</td><td>2</td><td></td><td>2</td><td></td></tr><tr><td>Y</td><td></td><td>1</td><td></td><td>10</td></tr><tr><td>Z</td><td></td><td></td><td>2</td><td>5</td></tr><tr><td>D</td><td>2</td><td>1</td><td></td><td></td></tr><tr><td>E</td><td></td><td></td><td></td><td>3</td></tr><tr><td>F</td><td></td><td>3</td><td>0</td><td></td></tr></tbody></table>\n\t\n\n</div>\n\nConsidere las siguientes afirmaciones:\n\n<ul style=\"margin-left:25px;\"><li style=\"margin-bottom:8px;\">[A.] $D$ perdió contra $X$.</li><li style=\"margin-bottom:8px;\">[B.] Hay dos jugadores que empatan en puntaje.</li><li style=\"margin-bottom:8px;\">[C.] Si $F$ hubiera ganado un partido más, habría ganado el torneo.</li></ul>\n\nDe las anteriores, ¿cuáles se cumplen con certeza?",
    options: [
      "Solo A",
      "Solo B",
      "A y C",
      "B y C"
    ],
    correctAnswer: 1,
    explanation: "Para resolver este ítem, lo primero que se debe hacer es completar la información faltante, según los enfrentamientos totales que debería jugar cada uno de los participantes y la cantidad de puntos según los resultados de cada enfrentamiento. Observe que cada jugador debe haber participado en 5 juegos y el  total de puntos debe coincidir con tres veces la  cantidad de ganados más la suma de empatados.  La tabla resultante es la siguiente:\n\t<div style=\"text-align:center; margin:15px 0;\">\n\t \n\t\t\n\t\t<table class=\"latex-table\"><tbody><tr><td></td><td>Ganados</td><td>Empatados</td><td>Perdidos</td><td>Puntos totales</td></tr><tr><td>X</td><td>2</td><td>1</td><td>2</td><td>7</td></tr><tr><td>Y</td><td>3</td><td>1</td><td>1</td><td>10</td></tr><tr><td>Z</td><td>1</td><td>2</td><td>2</td><td>5</td></tr><tr><td>D</td><td>2</td><td>1</td><td>2</td><td>7</td></tr><tr><td>E</td><td>1</td><td>0</td><td>4</td><td>3</td></tr><tr><td>F</td><td>2</td><td>3</td><td>0</td><td>9</td></tr></tbody></table>\n\t\t\n\t\n\t</div>\n\t\tConsidere que E no puede haber empatado 3 partidos para obtener esos 3 puntos, pues entonces la cantidad total de partidos empatados sería impar y eso no es posible porque cuando hay empate cada uno gana un punto. Con respecto a la primera afirmación, no se puede asegurar con certeza que D perdió contra X, ya que existe la posibilidad de que D le gane a X (compruébelo realizando una simulación de los 15 partidos). La segunda afirmación establece que hay dos jugadores que empatan, lo cual es cierto según la tabla completa, ya que D y X empatan con 7 puntos.  La tercera afirmación indica que si F hubiera ganado un partido más, habría ganado el torneo, lo cual no es posible, pues sobrepasaría la cantidad de partidos disputados (en total 5). Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 28,
    title: "Torneo de Jugadores",
    content: "¿Cuántos productos distintos se pueden obtener al multiplicar dos de los siguientes números: 3, 5, 6, 7 y 9 sin repetirlos?",
    options: [
      "9",
      "10",
      "20",
      "25"
    ],
    correctAnswer: 3,
    explanation: "Para resolver este ítem, se puede organizar la información en una tabla para identificar el número de casos posibles sin repetir los números, como se muestra a continuación:\n<div style=\"text-align:center; margin:15px 0;\">\n<table class=\"latex-table\"><tbody><tr><td></td><td>3</td><td>5</td><td>6</td><td>7</td><td>9</td></tr><tr><td>3</td><td>$x$</td><td>$✓$</td><td>$✓$</td><td>$✓$</td><td>$✓$</td></tr><tr><td>5</td><td>$x$</td><td>$x$</td><td>$✓$</td><td>$✓$</td><td>$✓$</td></tr><tr><td>6</td><td>$x$</td><td>$x$</td><td>$x$</td><td>$✓$</td><td>$✓$</td></tr><tr><td>7</td><td>$x$</td><td>$x$</td><td>$x$</td><td>$x$</td><td>$✓$</td></tr><tr><td>9</td><td>$x$</td><td>$x$</td><td>$x$</td><td>$x$</td><td>$x$</td></tr></tbody></table>\n</div>\nNote que al considerar la pareja 3 y 5 ya no se debe contar el 5 y 3, pues representan el mismo producto y así se eliminan las otras parejas repetidas. Esto nos da un total de  10 posibles productos.  Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 29,
    title: "Pregunta",
    content: "¿Cuántos diferentes ordenamientos de cuatro letras se pueden hacer con M, S, R, A, O de modo que cada uno comience en S y termine en A?",
    options: [
      "9",
      "10",
      "20",
      "25"
    ],
    correctAnswer: 3,
    explanation: "Una estrategia de solución para analizar este ítem es contar las posibilidades para seleccionar las cuatro letras, donde la primera sea S y la última A. Esto se puede representar con el siguiente esquema:\n\n\n\n} \n\n\n            <div class=\"tikz-container\">\n                <p style=\"margin-bottom:10px; font-weight:bold; color:#4338ca;\">[Gráfico / Diagrama TikZ Detectado]</p>\n                \n            </div>\n\nNote que existe la posibilidad de repetir letras, ya que en el enunciado no se restringe. Por ejemplo, si la segunda letra es una M, para la tercera se tienen 5 posibilidades, incluyendo nuevamente la M. \n\n } \n\n\n            <div class=\"tikz-container\">\n                <p style=\"margin-bottom:10px; font-weight:bold; color:#4338ca;\">[Gráfico / Diagrama TikZ Detectado]</p>\n                \n            </div>   \n\nEntonces, al ser 5 letras y cada una genera 5 ordenamientos, se cuentan 5 $\\cdot$ 5 en total. Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 30,
    title: "Pregunta",
    content: "\\item ¿Cuántos números de cuatro cifras se pueden formar de manera que el dígito de las unidades sea $0$ y los otros sean tres dígitos del 1 al 7, distintos entre sí?",
    options: [
      "18",
      "120",
      "210",
      "216"
    ],
    correctAnswer: 2,
    explanation: "Al analizar este ítem, una estrategia de solución es contar los posibles casos para formar un número de cuatro cifras, donde el dígito de las unidades sea $0$. Esto se puede representar en el siguiente esquema:\n\n\n} \n\n\n            <div class=\"tikz-container\">\n                <p style=\"margin-bottom:10px; font-weight:bold; color:#4338ca;\">[Gráfico / Diagrama TikZ Detectado]</p>\n                \n            </div>\n\n\nNote que no existe la posibilidad de repetir cifras, ya que en el enunciado se restringe. Por ejemplo, en el esquema se construye el número 1230, pero no son posibles los números 1110 o 1220.<br>\n<br>\nDe esta forma, considere el siguiente diagrama en el que se coloca el 1 en la primera posición:\n\n\n\n} \n\n\n            <div class=\"tikz-container\">\n                <p style=\"margin-bottom:10px; font-weight:bold; color:#4338ca;\">[Gráfico / Diagrama TikZ Detectado]</p>\n                \n            </div>    \n\nEn este diagrama, hay 6 posibilidades para el número en la segunda posición y cada uno de ellos genera 5 opciones para escoger el número de la tercera posición, es decir, $5\\cdot6$ posibilidades. Además, como son 7 diagramas de este tipo, el total de números que se puede formar es: \n$$7\\cdot6\\cdot5=210$$\nPor lo tanto, la opción correcta es la 3."
  },
  {
    id: 31,
    title: "Pregunta",
    content: "¿Cuántos números de tres cifras se pueden formar utilizando solamente el 1 y el 7?",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correctAnswer: 3,
    explanation: "Una estrategia de solución para este ítem es contar los posibles casos para formar un número de tres cifras. Note que existe la posibilidad de repetir cifras, ya que en el enunciado no se restringe. Esto se puede representar en el siguiente esquema: \n\n    \n\n} \n\n\n            <div class=\"tikz-container\">\n                <p style=\"margin-bottom:10px; font-weight:bold; color:#4338ca;\">[Gráfico / Diagrama TikZ Detectado]</p>\n                \n            </div>\n\nEn el esquema, si se toma el número 1 en la primera posición, hay 2 posibilidades para el número en la segunda posición y cada posibilidad genera 2 opciones para el número en la tercera posición, es decir, $2\\cdot2=4$ posibilidades. De igual forma, si se toma el número 7 en la primera posición hay 4 posibilidades. En total se forman 8 números siguiendo las flechas en el esquema. Por  lo tanto, la opción correcta es la 4."
  },
  {
    id: 32,
    title: "Pregunta",
    content: "En una colección de películas, 9 son de comedia y 7 son de terror. Considere las siguientes afirmaciones:\n <ul style=\"margin-left:25px; margin-bottom:15px;\"><li style=\"margin-bottom:5px;\">[A.]  La cantidad de maneras para elegir dos películas, sin importar el orden es 120.</li><li style=\"margin-bottom:5px;\">[B.] La cantidad de maneras para elegir dos películas de comedia es 81.</li><li style=\"margin-bottom:5px;\">[C.] La cantidad de maneras para elegir dos películas, primero de comedia y luego de terror, es 63.</li></ul>\n De acuerdo con lo anterior, ¿cuál de las afirmaciones anteriores se cumple con certeza?",
    options: [
      "Solo A",
      "A y B",
      "B y C",
      "A y C"
    ],
    correctAnswer: 3,
    explanation: "Una estrategia de solución para este ítem es analizar cada una de las afirmaciones brindadas. De esta manera:\n<ul style=\"margin-left:25px; margin-bottom:15px;\"><li style=\"margin-bottom:5px;\">En el caso de la afirmación A,  se tienen 16 películas en total (9 de comedia y 7 de terror).  Si se elige una película, se puede hacer de 16 formas. Una vez elegida la primera,  quedan 15 opciones para la segunda película. Esto da \n    $$16\\cdot 15 = 240$$ formas de elegir dos películas en orden.<br>\n    <br>\n    Sin embargo, al no importar el orden, cada par se cuenta dos veces (por ejemplo, elegir película X y luego Y es lo mismo que elegir Y y luego X).<br>  \n   <br>\n   Por ello, se divide 240 entre 2, lo que da 120 formas diferentes. Esto confirma la afirmación A.</li><li style=\"margin-bottom:5px;\">En el caso de la afirmación B, solo se consideran las 9 películas de comedia. En tal caso, la primera película de comedia se puede elegir de 9 maneras.  Luego, la segunda película de comedia se puede elegir de 8 maneras, dando $$9 \\cdot 8 = 72$$ formas en total si el orden importa, por lo que la afirmación B es incorrecta.</li><li style=\"margin-bottom:5px;\">En el caso de la afirmación C, se pide elegir primero una película de comedia y luego una de terror. En tal caso, existen 9 opciones para las películas de comedia y 7 para las de terror. Como el orden es importante (primero comedia y luego terror), basta con multiplicar $$9 \\cdot 7 = 63$$  Esto confirma que la afirmación C es correcta.</li></ul>\nPor lo tanto, la opción correcta es la 4."
  },
  {
    id: 33,
    title: "Pregunta",
    content: "Si $k$ es un número natural, ¿cuáles expresiones representan dos números naturales impares consecutivos?",
    options: [
      "$2k-1$ y $2k$",
      "$2k-1$ y $2k+3$",
      "$2k+1$ y $2k+3$",
      "$2k+1$ y $2k+2$"
    ],
    correctAnswer: 2,
    explanation: "En este ítem se debe aplicar la definición de números consecutivos, así como la de par e impar. Si $k$ es un número natural, entonces $2k$ siempre genera un número par, que al sumarle o restarle un impar se obtiene un número impar. De esta forma, las expresiones $2k-1$, $2k+1$ y $2k+3$ generan números naturales impares, pero la única pareja de consecutivos es $2k+1$ y $2k+3$. Por lo tanto, la opción correcta es la 3.<br>"
  },
  {
    id: 34,
    title: "Ejercicio",
    content: "En el conjunto de los números reales se define la operación $ \\odot $, que cumple las siguientes condiciones:\n\n\t\\item $m \\odot  -1=m$\n\t\n\t\\item $2 \\odot  -2=1$\n\n\nDe acuerdo con lo anterior, ¿cuál es una posible fórmula para definir la operación $ \\odot $?",
    options: [
      "$a\\odot b=2a+ab$",
      "$a\\odot b=a+b+1$",
      "$a\\odot b=a-b-3$",
      "$a\\odot b=a+2b+2$"
    ],
    correctAnswer: 1,
    explanation: "Una posible estrategia para resolver el ítem es analizar cada una de las condiciones propuestas: \n \n     \\item En el caso de $m \\odot  -1=m$, se observa que todo elemento operado con $-1$ queda igual.\n     \\item En el caso de $2  \\odot  -2=1$, se observa que el $2$ operado con su opuesto aditivo es igual a $1$.\n \n Es importante mencionar que en el caso de $m  \\odot  -1 = m$, el valor de $a=m$ y $b=-1$, mientras que para el caso de $2  \\odot  -2=1$, el valor de $a=2$ y $b=-2$. <br>\n \nPara la fórmula de la opción 1 se tiene que\n <table class=\"align-table\"><tbody><tr><td>$a \\odot  b=2a+ab$</td><td>$a \\odot  b=2a+ab$</td></tr><tr><td>$m \\odot  -1=2(m)+(m)(-1)$</td><td>$2 \\odot  -2=2(2)+(2)(-2)$</td></tr><tr><td>$m \\odot  -1=m$   <span class=\"status-correct\"> ✓</span></td><td>$2 \\odot  -2=0$  <span class=\"status-incorrect\"> ✗</span></td></tr></tbody></table>\n\n Para la fórmula de la opción 2 se tiene que \n <table class=\"align-table\"><tbody><tr><td>$a \\odot  b=a+b+1$</td><td>$a \\odot  b=a+b+1$</td></tr><tr><td>$m \\odot  -1=(m)+(-1)+1$</td><td>$2 \\odot  -2=(2)+(-2)+1$</td></tr><tr><td>$m \\odot  -1=m$  <span class=\"status-correct\"> ✓</span></td><td>$2 \\odot  -2=1$  <span class=\"status-correct\"> ✓</span></td></tr></tbody></table>\n\n Para la fórmula de la opción 3 se tiene que\n <table class=\"align-table\"><tbody><tr><td>$a \\odot  b=a-b-3$</td><td>$a \\odot  b=a-b-3$</td></tr><tr><td>$m \\odot  -1=(m)-(-1)-3$</td><td>$2 \\odot  -2=(2)-(-2)-3$</td></tr><tr><td>$m \\odot  -1=m-2$  <span class=\"status-incorrect\"> ✗</span></td><td>$2 \\odot  -2=1$  <span class=\"status-correct\"> ✓</span></td></tr></tbody></table>\n\n Para la fórmula de la opción 4 se tiene que\n <table class=\"align-table\"><tbody><tr><td>$a \\odot  b=a+2b+2$</td><td>$a \\odot  b=a+2b+2$</td></tr><tr><td>$m \\odot  -1=(m)+2(-1)+2$</td><td>$2 \\odot  -2=2+2(-2)+2$</td></tr><tr><td>$m \\odot  -1=m$  <span class=\"status-correct\"> ✓</span></td><td>$2 \\odot  -2=0$  <span class=\"status-incorrect\"> ✗</span></td></tr></tbody></table>\n\nNote que únicamente la fórmula de la opción 2 cumple las condiciones dadas. Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 35,
    title: "Propiedades de Potencias",
    content: "Se requiere que $n^p$ siempre sea un número impar, con $n$ y $p$ naturales distintos de cero.<br>\n \n Considere las siguientes afirmaciones:\n<ul class=\"latex-list\"><li><b>A.</b> <span>$n$ tiene que ser un número par siempre que $p$ sea impar.</span></li><li><b>B.</b> <span>$n$ puede ser cualquier número natural siempre que $p$ sea impar.</span></li><li><b>C.</b> <span>$p$ tiene que ser un número impar y $n$ puede ser un número impar.</span></li><li><b>D.</b> <span>$p$ puede ser cualquier número natural siempre que $n$ sea impar.</span></li></ul>\n\nDe las anteriores, ¿cuáles son verdaderas?",
    options: [
      "Solo B",
      "Solo C",
      "C y D",
      "A y B"
    ],
    correctAnswer: 0,
    explanation: "Para resolver este ítem, una estrategia es analizar cada afirmación por separado.\n<ul class=\"latex-list\"><li><b>A.</b> <span>Si $n$ es par, al elevarlo a cualquier número, el resultado siempre es par; por ejemplo $2^7$ es igual a $128$ que es par. Por lo anterior, se descarta la opción 1.</span></li><li><b>B.</b> <span>Al ser $n$ cualquier número natural, incluye números pares como en la opción 1, por lo que también se descarta esta opción.</span></li><li><b>C.</b> <span>Si $n$ es impar y $p$ es impar, se genera un número impar.</span></li><li><b>D.</b> <span>Si n es impar y p natural, también se genera un número impar.</span></li></ul>\nPor lo tanto, la opción correcta es la 3."
  },
  {
    id: 36,
    title: "Propiedades de Potencias",
    content: "Considere un sistema de numeración en el cual se tiene los siguientes símbolos con su respectivo valor numérico en el sistema decimal:\n\n<div class=\"tikz-placeholder\">[Imagen técnica o diagrama de apoyo]</div>\n\nPor ejemplo, los números 13, 60 y 500 quedan representados de la siguiente manera:\n\n\t<div class=\"tikz-placeholder\">[Imagen técnica o diagrama de apoyo]</div>\n\n¿Cuál número corresponde a la diferencia entre   $\\Gamma^HH\\Delta\\Gamma$  y  $HH\\Gamma^\\Delta\\Delta\\Delta||$?",
    options: [
      "272",
      "343",
      "615",
      "887"
    ],
    correctAnswer: 1,
    explanation: "Para este ítem se necesita analizar las reglas que permiten la construcción de los ejemplos dados. Se deduce que los símbolos que se colocan al mismo nivel se suman y el que se coloca como exponente se multiplica con la base. De esta forma, las expresiones dadas corresponden a:\n$$\\Gamma^HH\\Delta\\Gamma=5\\cdot100+100+10+5=615$$\n$$HH\\Gamma^\\Delta\\Delta\\Delta||=100+100+5\\cdot10+10+10+2=272$$ \nLuego:\n$$615-272=343$$\nPor lo tanto, la opción correcta es la 2."
  },
  {
    id: 37,
    title: "Propiedades de Potencias",
    content: "Se sabe que el producto de dos números naturales $A$ y $B$ es $S$. ¿Cuál expresión representa A aumentado en 2 unidades multiplicado por $B$?",
    options: [
      "$S+2$",
      "$S+B$",
      "$S+2A$",
      "$S+2B$"
    ],
    correctAnswer: 3,
    explanation: "Para este ítem se necesita simbolizar el enunciado. Así, se obtiene $A\\cdot B=S$. Además, A aumentado en 2 unidades es $A+2$, que al multiplicarlo por $B$ queda: $$(A+2)*B=A*B+2B=S+2B$$ Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 38,
    title: "Propiedades de Potencias",
    content: "Se le llama número habilidoso a un número de tres dígitos que es múltiplo de 4 y divisible por 7. ¿Cuál es la última cifra del menor y la última cifra del mayor número habilidoso?",
    options: [
      "2 y 0",
      "8 y 5",
      "0 y 6",
      "2 y 6"
    ],
    correctAnswer: 0,
    explanation: "Para abordar este ítem, considere que los números habilidosos son aquellos de tres dígitos simultáneamente múltiplos de 4 y de 7. Esta característica se expresa mediante la siguiente fórmula:\n\\[4 \\cdot 7 \\cdot k = 28 \\cdot k,\\]\ndonde \\(k\\) es un número natural que resulta en un número de tres dígitos.<br>\n<br>\nSin embargo,  este requisito no se cumple cuando \\(k\\) es igual a 1, 2 o 3.<br>\n<br>\nCuando \\(k = 4\\), se obtiene:\n\\[28 \\cdot 4 = 112,\\]\nel cual es el menor número habilidoso.<br>\n<br>\nPor otro lado, al considerar \\(k = 36\\), se obtiene \\(28 \\cdot 36 = 1008\\), mientras que \\(k = 35\\) ofrece \\(28 \\cdot 35 = 980\\), que corresponde al mayor número habilidoso.<br>\n<br>\nEn consecuencia, la última cifra de \\(112\\) es \\(2\\), y la de \\(980\\) es \\(0\\). Por lo tanto, la opción correcta es la 1."
  },
  {
    id: 39,
    title: "Propiedades de Potencias",
    content: "Sobre el conjunto $A = \\{1, 2, 3, 4\\}$, se define la operación $\\oplus$ por medio de la\nsiguiente tabla:\n\n\t<table style=\"border-collapse:collapse; margin:15px auto; width:100%; border:1px solid #ccc;\"><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">$\\oplus$</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; background:#f1f5f9; font-weight:bold;\">4</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td></tr><tr><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">1</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">4</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">3</td><td style=\"border:1px solid #ccc; padding:8px; text-align:center; \">2</td></tr></table>\n\nAsí, por ejemplo, se puede observar que $3 \\oplus 4 =\\colorbox{gray!25}{3}$ \n\n<div class=\"tikz-placeholder\">[Imagen técnica o diagrama de apoyo]</div>\n\nSe define el orden de un número como la cantidad de veces que se opera consigo mismo  hasta obtener  1. En tal caso, el 2 y 4 no tienen orden, ya que la operación con ellos mismos nunca dará uno.  ¿Cuál es el orden de 3?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 0,
    explanation: "Para resolver este ítem, es esencial comprender el concepto de orden de un número. Este concepto implica operar un  determinado número consigo mismo. Luego, es necesario realizar la misma operación con el resultado tantas veces como sea necesario hasta alcanzar el valor 1.\n\nTomemos como ejemplo el número 1:\n\n<table class=\"align-table\"><tbody><tr><td>$1 \\oplus 1 = 2$</td></tr><tr><td>$2 \\oplus 1 = 3$</td></tr><tr><td>$3 \\oplus 1 = 4$</td></tr><tr><td>$4 \\oplus 1 = \\boxed{\\mathbf{1}}$</td></tr></tbody></table>\n\n\nObserve que se realizaron un total de cuatro operaciones para obtener 1 como resultado, lo que indica que el orden de 1 es 4.<br>\n\nSiguiendo esta lógica, se aplica el mismo proceso al número 3:\n\n<table class=\"align-table\"><tbody><tr><td>$3 \\oplus 3 = 2$</td></tr><tr><td>$2 \\oplus 3 = \\boxed{\\mathbf{1}}$</td></tr></tbody></table>\n\nEn este caso, el orden de 3 resulta ser <b>2</b>. Por lo tanto, la respuesta correcta es la opción 1."
  },
  {
    id: 40,
    title: "Ejercicio",
    content: "Considere la siguiente figura:\n\n\t\\includegraphics[scale=0.5]{secciones/figuras/secuenciabuena.pdf}\n\n¿Cuál opción corresponde a la cuarta fila?",
    options: [
      "\\adjincludegraphics[valign=m,scale=0.5]{secciones/figuras/secuenciabuena1.pdf}\n\t\\vspace{0.25cm}",
      "\\adjincludegraphics[valign=m,scale=0.5]{secciones/figuras/secuenciabuena2.pdf}\n\t\\vspace{0.25cm}",
      "\\adjincludegraphics[valign=m,scale=0.5]{secciones/figuras/secuenciabuena3.pdf}\n\t\\vspace{0.25cm}",
      "\\adjincludegraphics[valign=m,scale=0.5]{secciones/figuras/secuenciabuena4.pdf}"
    ],
    correctAnswer: 3,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado. Lo primero por tomar en cuenta es que los rectángulos de la primera fila varían en su diseño:\n<ul class=\"latex-list\"><li><b>a)</b><span>El círculo del primer rectángulo cambia de posición entre los espacios de las diagonales. En tal caso, el círculo pasa de la posición izquierda hacia la posición superior en la segunda fila. Luego, en la tercera fila pasa a la posición derecha y en la la cuarta fila a la posición inferior.</span></li><li><b>b)</b><span>Los colores del segundo rectángulo alternan entre oscuro y claro, ya sea arriba o abajo de la diagonal. En la segunda fila, arriba de la diagonal es claro, en la tercera es oscuro y en la cuarta vuelve a ser claro.</span></li><li><b>c)</b><span>El tercer rectángulo alterna entre oscuro y claro. En la segunda fila es claro, en la tercera es oscuro y en la cuarta vuelve a ser claro.</span></li></ul>\n\nDe esta forma, en la cuarta fila, el primer rectángulo es el de las dos diagonales que contiene al círculo en la parte inferior. El segundo es el que tiene una diagonal con el color claro arriba de la diagonal y el oscuro debajo. El tercero es el rectángulo completamente claro. Por lo tanto, la opción correcta es la 4."
  },
  {
    id: 41,
    title: "Ejercicio",
    content: "Considere la siguiente figura que sigue un patrón por fila:\n\n\t\\includegraphics[scale=0.45]{secciones/figuras/cuadrofracciones.pdf}\n\n¿Cuál opción debe colocarse en el recuadro en blanco?\n\n\n\n\\newpage",
    options: [
      "\\adjincludegraphics[valign=m,scale=0.45]{secciones/figuras/cuadrofracciones1.pdf}",
      "\\adjincludegraphics[valign=m,scale=0.45]{secciones/figuras/cuadrofracciones2.pdf}",
      "\\adjincludegraphics[valign=m,scale=0.45]{secciones/figuras/cuadrofracciones3.pdf}",
      "\\adjincludegraphics[valign=m,scale=0.45]{secciones/figuras/cuadrofracciones4.pdf}"
    ],
    correctAnswer: 2,
    explanation: "Este ítem contiene dos patrones que deben descubrirse por observación de las figuras dadas en la imagen.<br> <br>\nEn cada fila, encontramos figuras seccionadas que contienen ciertas partes sombreadas. De modo que en las filas 1 y 2 se presenta:\n<ul class=\"latex-list\"><li><b>•</b><span>Una figura con 4 secciones en forma de triángulo.</span></li><li><b>•</b><span>Una figura con 4 secciones cuadradas.</span></li><li><b>•</b><span>Una figura con 9 secciones cuadradas.</span></li></ul>\n\nAdemás, observamos que en cada columna debe cumplirse un patrón constante de sombreado:\n<ul class=\"latex-list\"><li><b>•</b><span><b>Columna 1:</b> Siempre hay 1 sección sombreada.</span></li><li><b>•</b><span><b>Columna 2:</b> Siempre hay 3 secciones sombreadas.</span></li><li><b>•</b><span><b>Columna 3:</b> Siempre hay 2 secciones sombreadas.</span></li></ul>\n\nNote que en la tercera fila faltan las figuras de las columnas 1 y 2, ya que en la columna 3 se encuentra una figura con 4 secciones triangulares que respeta el patrón sombreado. Por lo que  faltan 2 figuras: una con 4 secciones cuadradas y otra con 9. Con esto se descartan las opciones 1 y 2.<br> \n<br>\nEn el caso de las opciones 3 y 4 se determina que la única que cumple con el patrón de sombreado es la 3, debido a que en la columna 2 de la opción 4 solo hay 2 secciones sombreadas, en lugar de 3.<br> <br>\nPor lo tanto, la opción correcta es la 3."
  },
  {
    id: 42,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente figura que sigue un patrón por fila:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/bolasdeboliche.pdf\n            </div>\n\n¿Cuál opción debe colocarse en el recuadro en blanco?",
    options: [
      "Imagen: secciones/figuras/bolasdeboliche1.pdf",
      "Imagen: secciones/figuras/bolasdeboliche2.pdf",
      "Imagen: secciones/figuras/bolasdeboliche3.pdf",
      "Imagen: secciones/figuras/bolasdeboliche4.pdf"
    ],
    correctAnswer: 1,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en la imagen. En cada fila se pueden identificar tres círculos, que en su interior tienen cierta cantidad de puntos negros.<br>\n<br>\nNote que, en la primera fila, al superponer los círculos de la primera y segunda columna junto con la columna faltante se obtiene la figura en la cuarta columna. <br>\n\n\n       \n\n\n\n\n\\tikzset{every picture/.style={line width=0.75pt}} \n\n\n                <div class=\"tikz-explanation-box\">\n                    \n                    <br><small>Esquema de razonamiento visual</small>\n                </div>\n\n\n\n\nDe la misma manera, en la segunda y tercera fila, se puede notar el mismo patrón al realizar la superposición descrita, con la diferencia de que faltaría un punto. Esto es\n\n\n \n\n\\tikzset{every picture/.style={line width=0.75pt}} \n\n\n                <div class=\"tikz-explanation-box\">\n                    \n                    <br><small>Esquema de razonamiento visual</small>\n                </div>\n   \n\n\nCon base en lo anterior, la opción correcta es la 2."
  },
  {
    id: 43,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente figura que sigue un patrón por fila:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillas.pdf\n            </div>\n\n¿Cuál opción corresponde a la parte faltante?\n<ul class=\"latex-list\"><li><b>1)</b><span><div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillas1.pdf\n            </div></span></li><li><b>2)</b><span><div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillas2.pdf\n            </div></span></li><li><b>3)</b><span><div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillas3.pdf\n            </div></span></li><li><b>4)</b><span><div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillas4.pdf\n            </div></span></li></ul>",
    options: [

    ],
    correctAnswer: 0,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado. Lo primero que se debe notar es que los trapecios de la primera fila varían en su diseño, generados por rotación con respecto a la línea horizontal:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillasEXP1.pdf\n            </div>\n\nLo mismo sucede en la segunda fila:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillasEXP2.pdf\n            </div>\n\nPor último, los pentágonos de la tercera fila tienen el mismo comportamiento:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/patronfigurillasEXP3.pdf\n            </div>\n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    id: 44,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente figura que sigue un patrón por fila:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/caepelota.pdf\n            </div>    \n\n¿Cuál opción debe colocarse en el recuadro en blanco?",
    options: [
      "Imagen: secciones/figuras/caepelota1.pdf",
      "Imagen: secciones/figuras/caepelota2.pdf",
      "Imagen: secciones/figuras/caepelota3.pdf",
      "Imagen: secciones/figuras/caepelota4.pdf"
    ],
    correctAnswer: 3,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado. Note que en cada fila se pueden identificar cuatro cuadrados, los cuales están divididos por su diagonal. Además, cada cuadrado de por medio tiene sombreado la mitad superior y estos no contienen el círculo gris.<br>\n<br>\nEn los cuadrados que contienen el círculo gris se observa un comportamiento con respecto a la posición sobre la diagonal: ``arriba'', ``medio'' y ``abajo''.<br>\n\n\nCon ello se tiene:\n<ul class=\"latex-list\"><li><b>•</b><span>En el caso de la primera fila, falta el círculo ``abajo''.</span></li><li><b>•</b><span>En el caso de la segunda fila, no hay círculo, solo zona sombreada en la parte superior derecha.</span></li><li><b>•</b><span>En el caso de la tercera fila, falta el círculo ``medio''.</span></li></ul>\nPor lo tanto, la opción correcta es la 4."
  },
  {
    id: 45,
    title: "Pregunta de Patrones",
    content: "Considere las siguientes figuras:\n\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/dadosseguidos.pdf\n            </div>\n\n\n¿Cuál figura tiene un patrón geométrico diferente de las otras?",
    options: [
      "1",
      "2",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado e identificar cuál de ellas no sigue este patrón. Lo primero que se nota en las figuras 1, 2, 3 y 5 es que la diferencia entre los puntos de los cuadros superior e inferior es de una unidad. No obstante, en la figura 4 esta diferencia es de 2 unidades. Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 46,
    title: "Pregunta de Patrones",
    content: "Considere las siguientes figuras:\n\n\n\t\\includegraphics [scale=0.63]{secciones/figuras/negrosencuadricula.pdf}\n\n\n¿Cuál figura tiene un patrón geométrico diferente de las otras, con respecto a los cuadros sombreados?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 2,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado y debe identificarse cuál de ellas no sigue este patrón. Note que en las figuras 1, 2 y 4 los cuadrados sombreados se agrupan en múltiplos de dos. No obstante, en la figura 3 hay un cuadro sombreado que no cumple lo anterior. Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 47,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/sombreroslocos.pdf\n            </div>\n\n¿Cuál es la figura que continúa la secuencia?",
    options: [
      "Imagen: secciones/figuras/sombreroslocos1.pdf",
      "Imagen: secciones/figuras/sombreroslocos2.pdf",
      "Imagen: secciones/figuras/sombreroslocos3.pdf",
      "Imagen: secciones/figuras/sombreroslocos4.pdf"
    ],
    correctAnswer: 0,
    explanation: "Este ítem contiene algunos patrones que deben descubrirse por observación de la secuencia de figuras. Inicialmente, se puede determinar a partir del patrón de figuras planas (círculo, cuadrado y triángulo) que la figura siguiente corresponde a un círculo, con lo que se descarta las opciones 2 y 4.<br>\n<br>\nPor otro lado,  basta con evaluar el patrón de la línea externa en cada figura. Observe que la línea se puede ubicar de cinco maneras distintas y esta posición rota en sentido horario: \n\n\n    \n\\tikzset{every picture/.style={line width=0.75pt}} \n\n\n                <div class=\"tikz-explanation-box\">\n                    \n                    <br><small>Esquema de razonamiento visual</small>\n                </div>\n\n\nPor lo tanto, la opción correcta es la 1."
  },
  {
    id: 48,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/figrectangulos\n            </div>\n\t\n\n\n¿Cuál figura debe ir en la posición 6?",
    options: [
      "Imagen: secciones/figuras/figrectangulosop1\n\t\\vspace{0,25cm}",
      "Imagen: secciones/figuras/figrectangulosop2\n\t\\vspace{0,25cm}",
      "Imagen: secciones/figuras/figrectangulosop3",
      "\\vspace{0,25cm} Imagen: secciones/figuras/figrectangulosop4"
    ],
    correctAnswer: 3,
    explanation: "Para resolver este ítem, se debe identificar los cambios en cada figura, de manera que se pueda deducir un patrón para obtener la figura que sigue.<br>\n\nNote que cada figura está dividida a la mitad, con una parte oscura y otra clara, donde la línea divisoria comienza vertical (figura 1), luego gira en un ángulo de 45 grados hacia la derecha (figura 2), pasa a horizontal (figura 3), luego a diagonal (figura 4) y vuelve a ser vertical (figura 5). Según este patrón, la posición 6 debe ser diagonal, descartando las opciones 1 y 3. Además, la opción 2 no es correcta, pues la diagonal no corresponde al giro de 45 grados hacia la derecha.  Por lo tanto, la opción correcta es la 4.<br>"
  },
  {
    id: 49,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/figcasitas\n            </div>    \n\n\n\n\\label{figcasitas} \n\n¿Cuál figura debe ir en la posición 8?",
    options: [
      "Imagen: secciones/figuras/figcasitasop1",
      "Imagen: secciones/figuras/figcasitasop2",
      "Imagen: secciones/figuras/figcasitasop3",
      "Imagen: secciones/figuras/figcasitasop4"
    ],
    correctAnswer: 3,
    explanation: "Para resolver este ítem se debe identificar los cambios en cada figura, de manera que se pueda deducir un patrón que permita obtener las demás figuras hasta llegar a la solicitada que en este caso, es la figura en la posición 8. Para ello considere la siguiente secuencia:\n\n  \n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/figcasitasrespuesta.pdf\n            </div>  \n\nSe nota que hay un patrón que se repite cada 4 figuras: se dobla el triángulo hacia adentro del cuadrado (figura 2), la figura resultante se rota 180 grados (figura 3)  y se vuelve a colocar el triángulo fuera del cuadrado (figura 4). De la figura 5 a la 8 este patrón se repite, pero respetando la colocación del triángulo en la figura 5. Por lo tanto, la opción correcta es la 2."
  },
  {
    id: 50,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\n\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/5.pdf\n            </div>\n\n\n¿Cuál figura debe ir en la posición 8?",
    options: [
      "Imagen: secciones/figuras/5-1",
      "Imagen: secciones/figuras/5-2",
      "Imagen: secciones/figuras/5-3",
      "Imagen: secciones/figuras/5-4"
    ],
    correctAnswer: 1,
    explanation: "Para resolver este ítem se debe considerar los cambios en cada figura, de manera que se pueda deducir un patrón para obtener las demás figuras hasta llegar a la solicitada, que en este caso es la de la posición 8. Para ello, se pueden dibujar las figuras adicionales a la secuencia, añadiendo una columna de puntos a cada figura subsiguiente:\n\n$$\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/5solucion.pdf\n            </div>$$\nAdemás, se debe reconocer la alternancia entre los colores negro y blanco del punto en la primera fila y primera columna de cada figura. Luego, se identifica el patrón numérico en la cantidad de puntos negros o blancos. Por ejemplo, en la figura 2 y 3 se mantienen 3 puntos negros, luego en las posiciones 4 y 5 hay 10 puntos negros ($10=3+7$); seguidamente en las posiciones 6 y 7 hay 21 puntos negros ($21=3+7+11$);  finalmente, en la posición 8 hay 36 puntos negros ($36=3+7+11+15$). Por lo tanto, la opción correcta es la 2.<br>\n<br>\nUna explicación alternativa es notar que se forman cuadrados que aumentan de tamaño y alternan el color de su diagonal. En tal caso, la figura 8 es un cuadrado de 8x8 con su diagonal de color negro."
  },
  {
    id: 51,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/estrellassecuencia.pdf\n            </div>   \n\n\n¿Cuál figura debe ir en la posición 36?",
    options: [
      "Imagen: secciones/figuras/estrellassecuencia1.pdf",
      "Imagen: secciones/figuras/estrellassecuencia2.pdf",
      "Imagen: secciones/figuras/estrellassecuencia3.pdf",
      "Imagen: secciones/figuras/estrellassecuencia4.pdf"
    ],
    correctAnswer: 1,
    explanation: "Este ítem contiene un patrón que debe descubrirse por observación de las figuras dadas en el enunciado e identificarse tanto el patrón de sombreado como el del movimiento del círculo que rota hacia la derecha.\nLas figuras de la 7 a la 12 y de la 13 a la 18 son:\n\n\n\\tikzset{every picture/.style={line width=0.75pt}} \n\n\n                <div class=\"tikz-explanation-box\">\n                    \n                    <br><small>Esquema de razonamiento visual</small>\n                </div>\n\n\nNote que las figuras en posición par no se encuentran sombreadas, por lo que las opciones 1 y 4 no pueden ser consideradas. Por otro lado, note que la posición del círculo comprende las 5 intersecciones de la estrella, por lo que la sexta figura va a variar 5 veces antes de volver a la figura de la sucesión inicial. Al ser la posición 36, será la sucesión 5 veces después, por lo que volverá a la sucesión original. Por lo tanto, la opción correcta es la 2.<br>\n\nUna explicación alternativa es notar que el círculo negro vuelve a la posición original después de 5 giros: $1+5=6$, $6+5=11$, $11+5=16$, $16+5=21$, es decir $1+5n$. Por tanto en $36=5\\cdot 7+1$ vuelve a la posición original."
  },
  {
    id: 52,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/circulos\n            </div> \n\n¿Cuál figura debe ir en la posición 99?",
    options: [
      "Imagen: secciones/figuras/circulo1",
      "Imagen: secciones/figuras/circulo2",
      "Imagen: secciones/figuras/circulo3",
      "Imagen: secciones/figuras/circulo4"
    ],
    correctAnswer: 3,
    explanation: "Para resolver este ítem se debe reconocer los cambios en cada figura, de manera que se pueda deducir un patrón para obtener las demás figuras hasta llegar a la solicitada que, en este caso, es la figura en la posición 99. Considere la secuencia dada para llegar a las primeras 12 figuras:\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/circulossolucion.pdf\n            </div>\n\t\t\nNote que las figuras en las posiciones 1, 5 y 9 son iguales, y así también lo será la 13 y todas las demás en la posición $4n+1$ (figura 1), es decir, las figuras que sean múltiplos de 4 más una unidad, o bien, las que al dividir por 4 tengan residuo 1.<br>\n<br>\nPor otro lado, las figuras en las posiciones $2$, $6$ y $10$ son iguales y, de esta forma, lo será la 14 y todas las demás en la posición $4n+2$ (figura 2), es decir, que sean múltiplos de 4 más dos unidades, o bien, las que al dividir por 4 tengan residuo 2.<br>\n<br>\nLuego, las figuras en las posiciones 3, 7 y 11 son iguales, y con ello lo será la 15 y todas las demás en la posición $4n+3$ (figura 3), es decir, que sean múltiplos de 4 más tres unidades, o bien, las que al dividir por 4 tengan residuo 3.<br>\n<br>\nFinalmente, las figuras en las posiciones 4, 8 y 12 son iguales, y así también lo será la 16 y todas las demás en la posición $4n$ (figura 4), es decir, que sean múltiplos de 4, o bien, las que al dividir por 4 tengan residuo $0$.<br>\n<br>\nCon base en la expresión utilizada, 99 se puede escribir como $4n+3$, es decir:\n$$99=4\\cdot24+3$$\nEntonces, la figura en la posición 99 es igual a la figura en la posición 3.<br> \n<br>\nUna explicación alternativa es notar que el patrón consta de 4 figuras. Al multiplicar $4\\cdot25$ se obtienen 100 posiciones de figuras en las que han  transcurrido 25 ciclos, por lo que figura 100 será igual a la posición 4. De este modo, la figura en la posición 99 es la misma en la posición 3.  Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 53,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras formada por pajillas del mismo tamaño y bolitas de plasticina:  \n\n\n\n\\tikzset{every picture/.style={line width=0.75pt}} \n\n<div class=\"tikz-explanation-box\">[Gráfico del problema]</div>\n\n\n¿Cuántos pajillas se necesitan para construir la figura 10?",
    options: [
      "$20$",
      "$52$",
      "$57$",
      "$70$"
    ],
    correctAnswer: 3,
    explanation: "Para resolver este ítem se debe considerar los cambios en cada figura, de manera que se pueda deducir un patrón.  Note que la cantidad de pajillas aumenta hasta generar la figura en la décima posición, la cual se puede dibujar añadiendo cuadrados y romboides:\n \n\n\n\n\\tikzset{every picture/.style={line width=0.75pt}} \n\n\n                <div class=\"tikz-explanation-box\">\n                    \n                    <br><small>Esquema de razonamiento visual</small>\n                </div>\n\nAl contar cada pajilla por aparte, se obtiene lo siguiente:\n\n\n\n\\tikzset{every picture/.style={line width=0.75pt}} \n\n\n                <div class=\"tikz-explanation-box\">\n                    \n                    <br><small>Esquema de razonamiento visual</small>\n                </div>\n\n\nAsí en {\\bf $a$} se cuentan todas las pajillas laterales; en {\\bf $b$} se cuentan las pajillas superiores; en {\\bf $c$} se cuentan los lados compartidos por romboides y cuadrados y, finalmente, en {\\bf $d$} se cuentan todas las pajillas que forman la base de cada cuadrado.<br>\n<br>\nDe esta manera, $22 + 10 + 10 + 10 = 52$. Por lo tanto, la opción correcta es la 2.<br>\n<br>\nUna solución alternativa es notar que en cada figura hay tres filas horizontales, cuya cantidad de pajillas coincide con el número de la figura. Además, la cantidad de pajillas verticales y oblicuas corresponde con el número de la figura más una unidad. Por ejemplo, la figura 3 tiene tres filas horizontales con 3 pajillas, 4 pajillas verticales y 4 oblicuas. Por tanto, la figura 10 tendrá 3 filas de 10 pajillas, 11 pajillas verticales y 11 oblicuas para un total de 52 pajillas."
  },
  {
    id: 54,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente figura:\n\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/vistasombra.pdf\n            </div>\n\n¿Cuál es la forma que proyectan las figuras sobre el plano con respecto a la vista frontal?",
    options: [
      "Imagen: secciones/figuras/vistasombra1N.pdf",
      "Imagen: secciones/figuras/vistasombra2N.pdf\n\t\\vspace{0.25cm}",
      "[3)] Imagen: secciones/figuras/vistasombra3N.pdf\n\t\\vspace{0.25cm}",
      "Imagen: secciones/figuras/vistasombra4N.pdf"
    ],
    correctAnswer: 0,
    explanation: "Para este ítem hay que observar cada una de las figuras y proyectarlas hacia al plano, como se muestra a continuación: \n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/vistasombraproyectada.pdf\n            </div> \n\nEn el caso de la figura curva, se proyecta un rectángulo; el cono truncado proyecta un círculo y la pirámide truncada rectangular marca un rectángulo en el plano. Por lo tanto, la opción correcta es la 1."
  },
  {
    id: 55,
    title: "Pregunta de Patrones",
    content: "Considere las siguientes vistas de una figura tridimensional:\n$$\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/vista\n            </div> $$\n\n¿Cuál de las siguientes figuras se puede formar con estas vistas?",
    options: [
      "Imagen: secciones/figuras/vista1\n\t\\vspace{0.25cm}",
      "Imagen: secciones/figuras/vista2\n\t\\vspace{0.25cm}",
      "Imagen: secciones/figuras/vista3",
      "Imagen: secciones/figuras/vista4"
    ],
    correctAnswer: 2,
    explanation: "Una estrategia para resolver este ítem es considerar la figura desde la vista superior, para notar que debe tener un trapecio en el techo, según la siguiente figura:\n \n  \n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/vistarespuesta\n            </div>\n \n Por lo anterior, se descartan las opciones 1 y 4.<br>\n \\newline \n Luego, se descarta la opción 2 porque en la vista lateral hay un corte en diagonal. Por lo tanto, la opción correcta es la 3."
  },
  {
    id: 56,
    title: "Pregunta de Patrones",
    content: "Considere las siguientes figuras:\n\n$$\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/figrayitas1\n            </div>$$\n\n¿Cuál de ellas se debe rotar para obtener \n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/figrayitas2\n            </div>?",
    options: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: 1,
    explanation: "La estrategia para resolver este ítem consiste en identificar el sentido de rotación correcto (hacia la izquierda o hacia la derecha), de manera que al rotar se genere la figura solicitada, en la cual se nota que las líneas que no son diagonales dentro de los cuadrados deben ser paralelas entre sí.  Esto descarta las figuras a y c.<br>\n\\newline\nLa figura d también se descarta, porque al rotarla en cualquier dirección, no coinciden las diagonales de los cuadrados con la posición de la figura solicitada. <br> \\newline\nEn el caso de la figura b, al rotar se tiene que:\n\n$$ \n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/figrayitas1solucion.pdf\n            </div>$$\n\nPor lo tanto, la opción correcta es la 2."
  },
  {
    id: 57,
    title: "Pregunta de Patrones",
    content: "Para empacar cinco bolas se utilizan cilindros de 3 cm de radio y  30 cm de altura. Se puede afirmar con certeza que cada empaque contiene bolas que",
    options: [
      "exceden los 3 cm de radio.",
      "exceden los 6 cm de diámetro.",
      "no exceden los 3 cm de radio.",
      "no exceden los 3 cm de diámetro."
    ],
    correctAnswer: 2,
    explanation: "Para resolver este ítem se va a analizar la posibilidad de que suceda con certeza cada afirmación.\n<ul class=\"latex-list\"><li><b>•</b><span>Cada empaque contiene bolas que exceden los 3 cm de radio.\n\n<b>Falsa</b>, pues el radio del cilindro es de 3 cm y, suponiendo que las 5 bolas quedan justas, como se muestra en la figura, su radio no puede exceder los 3 cm, ya que no entrarían en el cilindro. \n\n  \n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/cilindrobolasmetidas.pdf\n            </div>  \n</span></li><li><b>•</b><span>Cada empaque contiene bolas que exceden los 6 cm de diámetro.\n\n<b>Falsa</b>, dado que el diámetro es el doble del radio, lo que excedería los 3 cm de radio.</span></li><li><b>•</b><span>Cada empaque contiene bolas que no exceden los 3 cm de radio.\n\n<b>Verdadera</b>, ya que el radio máximo de cada bola es de 3 cm. Esto no excluye la posibilidad de que las bolas sean más pequeñas.</span></li><li><b>•</b><span>Cada empaque contiene bolas que no exceden los 3 cm de diámetro.\n\n<b>Indeterminada</b>, ya que existe la posibilidad de que las bolas  tengan menos de 3 cm de radio, pero no se tiene la certeza de que midan menos de 1.5 cm de radio (3 cm de diámetro).</span></li></ul>\n\nPor lo tanto, la opción correcta es la 3."
  },
  {
    id: 58,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente figura:\n\n$$\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/dadofiguras\n            </div>$$\n\nSi se dobla para formar un cubo, ¿cuál figura se obtiene?",
    options: [
      "Imagen: secciones/figuras/dadofigurasop1",
      "Imagen: secciones/figuras/dadofigurasop2",
      "Imagen: secciones/figuras/dadofigurasop3",
      "Imagen: secciones/figuras/dadofigurasop4"
    ],
    correctAnswer: 1,
    explanation: "Para resolver este ítem, se debe visualizar la forma extendida dada en el enunciado y luego doblarlo para formar un cubo. Al formarlo, el triángulo queda opuesto al cuadrado negro, la estrella al corazón y el círculo al cuadrado blanco. Además, el corazón queda al lado del círculo y el triángulo negro arriba del corazón.  Las opciones 1, 3 y 4 se descartan al no cumplir con alguna de esas posiciones. Por lo tanto, la opción correcta es la 2.<br>"
  },
  {
    id: 59,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente figura, la cual corresponde a un papel cuadrado doblado con algunas figuras marcadas:\n\n$$\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/papeldoblado\n            </div>$$\n\nAl desdoblar el papel,  ¿cuál figura se obtiene,  de manera que presente simetría con respecto a ambas diagonales?",
    options: [
      "Imagen: secciones/figuras/papeldoblado1",
      "Imagen: secciones/figuras/papeldoblado2",
      "Imagen: secciones/figuras/papeldoblado3",
      "Imagen: secciones/figuras/papeldoblado4"
    ],
    correctAnswer: 0,
    explanation: "Para resolver este ítem, se debe partir de la condición de que la figura tiene simetría con respecto a ambas diagonales, por lo que se descartan la figuras 2 y 3. Luego, se observa que los cuadrados no son continuos en la figura del papel doblado, pues están separados y rotados. Por lo tanto, la opción correcta es la número 4.<br>"
  },
  {
    id: 60,
    title: "Pregunta de Patrones",
    content: "Considere la siguiente secuencia de figuras:\n\n\n\t\n            <div class=\"latex-image\">\n                <div style=\"background:#eee; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; margin-bottom:5px;\">🖼️</div>\n                <strong>Imagen:</strong><br>secciones/figuras/cuadradosarea.pdf\n            </div>\n\n\n\nCon base en el patrón anterior, considere  las siguientes afirmaciones:\n\n<ul class=\"latex-list\"><li><b>A.</b><span>El área sombreada de la figura 2 es $\\dfrac{1}{3}$ del área sombreada de la figura 1.</span></li><li><b>B.</b><span>El área sombreada de la figura 1 es $\\dfrac{1}{4}$ del área sombreada de la figura 3.</span></li><li><b>C.</b><span>El área sombreada de la figura 3 es $\\dfrac{1}{2}$ del área sombreada de la figura 2.</span></li></ul>\n\nDe las anteriores, ¿cuáles son verdaderas?",
    options: [
      "Solo A",
      "Solo C",
      "A y B",
      "B y C"
    ],
    correctAnswer: 1,
    explanation: "Para este ítem, se debe hacer un análisis por figura, donde la figura 1 es la que se replica en las figuras de la secuencia.\n<ul class=\"latex-list\"><li><b>•</b><span>En la figura 1 se tiene que el área sombreada es dos tercios de la mitad del cuadrado mayor. Esto es:\n$$\\mbox{ Área sombreada Figura 1 = }\\dfrac{1}{2}\\cdot\\dfrac{2}{3}=\\dfrac{2}{6}=\\fbox{$\\dfrac{1}{3}$}$$</span></li><li><b>•</b><span>En la figura 2 observe que se replica la figura 1 de área un tercio, pero reducida a una cuarta parte del cuadrado mayor, y esto sucede 2 veces. Esto es:\n$$\\mbox{ Área sombreada Figura 2 = }\\fbox{$\\dfrac{1}{3}$}\\cdot\\dfrac{1}{4}\\cdot 2=\\dfrac{2}{12}=\\dfrac{1}{6}$$</span></li><li><b>•</b><span>En la figura 3 observe que se replica la figura 1 de área un tercio, pero reducida a una dieciseisava parte del cuadrado mayor, y esto sucede 4 veces. Esto es:\n$$\\mbox{ Área sombreada Figura 3 = }\\fbox{$\\dfrac{1}{3}$}\\cdot\\dfrac{1}{16}\\cdot4=\\dfrac{2}{24}=\\dfrac{1}{12}$$</span></li></ul>\nDe esta forma, revisamos que A es falsa, ya que \n$$\\mbox{ Área sombreada Figura 2} =\\dfrac{1}{6}\\not=\\dfrac{1}{3}\\mbox{ Área sombreada Figura 1}=\\dfrac{1}{3}\\cdot\\dfrac{1}{3}=\\dfrac{1}{9}$$ \nAsimismo, verificamos que B es falsa, ya que\n$$\\mbox{ Área sombreada Figura 1} =\\dfrac{1}{3}\\not=\\dfrac{1}{4}\\mbox{ Área sombreada Figura 3}=\\dfrac{1}{4}\\cdot\\dfrac{1}{12}=\\dfrac{1}{48}$$ \nSe observa que solo C es verdadera, ya que<br>\n$$\\mbox{ Área sombreada Figura 3} =\\dfrac{1}{12}=\\dfrac{1}{2}\\mbox{ Área sombreada Figura 2}=\\dfrac{1}{2}\\cdot\\dfrac{1}{6}=\\dfrac{1}{12}$$<br>\n\nPor lo tanto, la opción correcta es la 2."
  },
  {
  "id": 1,
  "title": "Problema 1: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La televisión nos tantaliza, quedamos como prendados de ella. Este efecto entre mágico y maléfico es obra, creo, del exceso de la luz que con su intensidad nos toma.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Sábato, 2000)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra resume el efecto de la televisión?</p>",
  "options": [
    "Nociva",
    "Ilusoria",
    "Atractiva",
    "Seductora"
  ],
  "correctAnswer": 3,
  "explanation": "En este ítem se solicita una definición de la palabra televisión con base en el texto. Una posible estrategia es analizar las características de la televisión para encontrar una palabra que las englobe.<br/><br/>Según el texto, la televisión produce un efecto hipnótico, mágico y cautivador en el expectador. Dentro de este contexto, las opciones nociva, atractiva e ilusoria no necesariamente integran este conjunto de características.<br/><br/>Por otra parte, el significado de seductora implica un efecto de cautivar o atrapar; por tanto, este es el término que mejor define a la televisión. La opción correcta es la 4."
  },
  {
  "id": 2,
  "title": "Problema 2: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Al principio, en la isla de Nueva Guinea, donde hace unos 10.000 años se domesticó la caña de azúcar, la gente cogía las cañas y masticaba el tallo hasta sentir la <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> en la lengua. El azúcar era una especie de <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span>, la cura de todos los males, y ocupaba un lugar destacado en los antiguos <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> de la isla.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(National Geographic, 2020)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
  "options": [
    "dulzura - elixir - mitos",
    "delicia - bálsamo - ritos",
    "melaza - jarabe - símbolos",
    "suavidad - remedio - cuentos"
  ],
  "correctAnswer": 0,
  "explanation": "El texto presenta tres espacios, los cuales deben completarse con términos que aporten coherencia al párrafo. Para el primer espacio se alude al sentido del gusto; por lo tanto, suavidad y delicia son sensaciones que se pueden experimentar con la dulzura de la caña de azúcar. La  melaza es un producto y no una sensación. <br/><br/>La frase \"la cura de todos los males\"  limita el contexto para encontrar el segundo término. Esta propiedad se relaciona con el concepto de elixir como el remedio maravilloso que cura todos los males, superando a los ordinarios como bálsamo o jarabe. Finalmente, la última palabra podría ser mitos o ritos, debido a que encaja en el contexto de las creencias y las capacidades mágicas de la caña. La opción correcta es la 1.<br/><br/><div style=\"height: 56.699999999999996px;\"></div>\n\\newpage\n\\item Considere el siguiente texto:\n\\begin{center}\n\\begin{tcolorbox}[arc=3mm, breakable,bicolor,colback=gray!10,\n         colbacklower=white, boxrule=1pt,\n         frame hidden,\n         drop shadow=black!50!white\n         ]\n        \n\t\t\tDisculpen esta <u>impericia</u>, esta torpeza al escribir. Me atropello, nada va en orden. No soy escritor... \\\\<br/><br/>            \\hfill (Víquez, 1994)\n            \\end{tcolorbox}\n\\end{center}<br/><br/>Según el texto, ¿cuál palabra es equivalente a “impericia”?\n\\begin{enumerate}[itemsep=0.25cm,label=\\arabic*)]\n\t\n\t\\item Desorden\n\t\\item Accidente\n\t\\item Negligencia\n\t\\item Incompetencia \n\\end{enumerate}\t<br/><br/><div style=\"height: 9.45px;\"></div>\n\\begin{tcolorbox}[arc=3mm,breakable,colback=gray!10]\n\\centering<b>Explicación</b> \\end{tcolorbox} En el ítem se muestra una palabra subrayada para encontrar su respectivo sinónimo en las opciones. El objetivo es establecer una relación de  semejanza entre  el  significado de impericia y las opciones según el texto. <br/><br/>La clave que ofrece el texto para detectar el sinónimo es \"no soy escritor\". La palabra impericia tiene que ver con la falta de destreza para ejecutar alguna actividad que, en este contexto, es una incompetencia al escribir. Desorden alude a cambios, pero no implica falta de habilidades; accidente a un suceso fortuito y negligencia apunta más a un desinterés o descuido. La opción correcta es la 4."
},
{
  "id": 3,
  "title": "Problema 3: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Disculpen esta <u>impericia</u>, esta torpeza al escribir. Me atropello, nada va en orden. No soy escritor... <br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Víquez, 1994)</div>\n  </div>\n  <p style=\"margin-top: 20px;\"><b>Según el texto, ¿cuál palabra es equivalente a “impericia”?</b></p>",
  "options": [
    "Desorden",
    "Accidente",
    "Negligencia",
    "Incompetencia"
  ],
  "correctAnswer": 3,
  "explanation": "En el ítem se muestra una palabra subrayada para encontrar su respectivo sinónimo en las opciones. El objetivo es establecer una relación de  semejanza entre  el  significado de impericia y las opciones según el texto. <br/><br/>La clave que ofrece el texto para detectar el sinónimo es \"no soy escritor\". La palabra impericia tiene que ver con la falta de destreza para ejecutar alguna actividad que, en este contexto, es una incompetencia al escribir. Desorden alude a cambios, pero no implica falta de habilidades; accidente a un suceso fortuito y negligencia apunta más a un desinterés o descuido. La opción correcta es la 4."
},
{
  "id": 4,
  "title": "Problema 4: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    El chiste es un dicho <u>breve</u>, <u>agudo</u> y <u>gracioso</u> que surge espontáneamente del pueblo; algunos investigadores y autores los recopilan para su publicación.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(de la Torre, 2005)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra sintetiza los términos subrayados? \n\nInicia la numeración de las opciones de la pregunta</p>",
  "options": [
    "Sagaz",
    "Burlesco",
    "Ingenioso",
    "Perspicaz"
  ],
  "correctAnswer": 2,
  "explanation": "En este ejemplo se debe sintetizar el significado  de las tres palabras subrayadas para identificar el atributo principal del chiste. <br/><br/>El texto afirma que el chiste es breve, agudo y gracioso, cualidades que describen una capacidad de ingenio que combina creatividad, perspicacia y síntesis. Los otros atributos, sagaz y perspicaz,  apuntan más a la agudeza; mientras que burlesco se relaciona con lo gracioso. La opción correcta es la 3."
},
{
  "id": 5,
  "title": "Problema 5: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La literatura comprometida está hecha de <u>pruebas</u>, de <u>alegatos</u>, de <u>refutaciones</u>. Leerla puede no causarnos placer, pero nos inclina a asentir o a rechazar.  <br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Castellanos, 1959)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra sintetiza los términos subrayados?</p>",
  "options": [
    "Evidencias",
    "Testimonios",
    "Declaraciones",
    "Argumentaciones"
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 6,
  "title": "Problema 6: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La diferencia entre mito y leyenda es imprecisa, ya que sus orígenes son <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span>. En su lenguaje desempeñan un papel de particular relevancia la <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> y la alegoría; ya que describen figuras míticas, que generalmente son <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span>.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(de la Torre, 2005)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
  "options": [
    "idénticos - poesía - insólitas",
    "semejantes - metáfora - simbólicas",
    "exactos - ambigüedad - metafísicas",
    "relacionados - historia - imaginarias"
  ],
  "correctAnswer": 1,
  "explanation": "En este ítem se presenta un texto donde se deben elegir tres términos que completen de manera coherente el párrafo. La clave para descifrar la respuesta está en las pistas del contexto. El texto expone más similitudes que diferencias entre el mito y la leyenda. Por tanto, en el primer espacio se deduce que existe cierta semejanza o relación en el origen de ambas. Por otro lado, idéntico y exacto contradicen la característica de imprecisión.<br/><br/>Con respecto al segundo término, las palabras lenguaje, alegoría y míticas brindan algunas pistas para establecer el acercamiento semántico hacia la palabra metáfora, que alude a una representación simbólica. En el tercer espacio, el término buscado debe asumir lo mítico y alegórico, asociado a la característica de simbólico o imaginario. La opción correcta es la 2."
},
{
  "id": 7,
  "title": "Problema 7: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Machu Picchu es considerada, al mismo tiempo, una <u>obra maestra</u> de la arquitectura y la ingeniería.  Sus peculiares características <u>arquitectónicas</u> y <u>paisajísticas</u>, y el velo de misterio que ha tejido a su alrededor buena parte de la literatura publicada sobre el sitio, lo han convertido en una de las siete maravillas del mundo moderno.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Elaboración propia)</div>\n  </div>\n  <p style=\"margin-top: 20px;\"><b></b></p><br><p>Según el texto, ¿cuál opción sintetiza las características subrayadas?</p>",
  "options": [
    "Sitio espiritual",
    "Paraje histórico",
    "Lugar legendario",
    "Entorno monumental"
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 8,
  "title": "Problema 8: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Los textos electrónicos presentan nuevas <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> y también nuevos retos que pueden tener gran impacto sobre las <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> que tiene el individuo de comprender lo que lee. La destreza en las nuevas competencias de Internet se convertirá en algo esencial para el futuro <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> de nuestros alumnos.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Asociación Internacional de Lectura, 2001)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
  "options": [
    "acciones - estrategias - progreso",
    "ayudas - capacidades - alfabetismo",
    "dificultades - habilidades - desarrollo",
    "preferencias - actitudes - aprendizaje"
  ],
  "correctAnswer": 1,
  "explanation": "En este ejercicio se tiene un texto que debe ser completado. Para resolverlo se debe verificar el significado de cada palabra en el párrafo. Para el primer espacio se presenta una contraposición entre retos y el término que se desea buscar. Entre las opciones, la única que en su significado coincide con esa contraposi-\\\\ ción es ayudas. <br/><br/>En el segundo espacio, los términos estrategias, capacidades y habilidades pueden ser posibles opciones, porque se refieren a condiciones concretas que desarrolla una persona en relación con las habilidades de lectura, mientras que actitudes hace referencia a un modo de ver las cosas. Finalmente,  alfabetismo  y aprendizaje pueden ser posibles opciones, ya que se relacionan con el contexto de la lectura. La opción correcta es la 2."
},
{
  "id": 9,
  "title": "Problema 9: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Ese texto, sin duda, por sus contenidos, por la manera en que está redactado, por su gran aporte histórico y demás características, promete tener gran <u>envergadura</u> para todos aquellos lectores que logren identificar toda su riqueza.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Elaboración propia)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a “envergadura”?</p>",
  "options": [
    "Calidad",
    "Sentido",
    "Significado",
    "Trascendencia"
  ],
  "correctAnswer": 3,
  "explanation": "En este ítem se presenta una palabra subrayada para encontrar su respectivo sinónimo. Para resolverlo se requiere establecer la relación de semejanza entre el significado de envergadura con las opciones según el texto.<br/><br/>Las claves que brinda el texto para encontrar el sinónimo son su aporte histórico y  su riqueza. Entonces, la palabra envergadura puede asociarse con el alcance e importancia que tendrá el texto para los lectores, mientras que calidad se refiere a las características del escrito, pero no a su relevancia. Finalmente, los términos sentido y significado aluden más a la comprensión del texto.\nLa opción correcta es la 4."
},
{
  "id": 10,
  "title": "Problema 10: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Actualmente, se desarrolla el vínculo entre seres orgánicos y la tecnología. Precisamente, la bioelectrónica aprovecha directamente el <u>prolífico</u> repertorio de sensores olfativos y el <u>sofisticado</u> sistema nervioso de los insectos para crear biorrobots.\n\t\t\t\n\t\t\t\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Hidalgo, 2020)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras se oponen a los términos subrayados?</p>",
  "options": [
    "limitado - básico",
    "amplio - elemental",
    "reducido - complejo",
    "insuficiente - artificial"
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 11,
  "title": "Problema 11: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La localidad aparece por primera vez mencionada en la segunda mitad del siglo IX. De aquellos años quedan sepulcros en los alrededores de la parroquia de San Vicente. Pero sin duda los <u>vestigios</u> más destacados, además de una veintena de casas colgantes, son los de su castillo.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Luján, 2023)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a \"vestigios\"?</p>",
  "options": [
    "Añicos",
    "Restos",
    "Destrozos",
    "Escombros"
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 12,
  "title": "Problema 12: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Dominando la escena central del Egeo, se distingue una constelación de islas a las que los griegos denominaron Cícladas por su disposición en círculo. Después de cinco milenios, el barco sigue siendo el medio utilizado para desplazarse entre las islas griegas. Mikonos es un excelente inicio para un <u>periplo</u> que visite las seis joyas más preciadas de islas habitadas que componen el archipiélago.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Martínez, 2019)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra es equivalente a \"periplo\"?</p>",
  "options": [
    "Paseo",
    "Acceso",
    "Destino",
    "Trayecto"
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 13,
  "title": "Problema 13: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    En el momento de la fundación de la Roma Quadrata, el latín era una simple habla primitiva y <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> empleada por pastores, campesinos y forajidos soldados rudos; pero, conforme Roma comienza a lograr victoria tras victoria sobre otros pueblos, su idioma comienza a <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> por la misma Italia y fuera de sus fronteras.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Quirós, 2000)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
  "options": [
    "antigua - dividirse",
    "rústica - expandirse",
    "exótica -  distribuirse",
    "arcaica -  transmitirse"
  ],
  "correctAnswer": 1,
  "explanation": "En este ítem se solicita identificar dos términos que completen el sentido lógico del texto. Este proceso requiere verificar que el significado de cada palabra sea coherente con las ideas del texto.<br/><br/>Para el primer espacio se puede inferir que el latín, además de una lengua primitiva, también es rústica, porque está asociada al habla cotidiana de pastores, campesinos y soldados forajidos, que usualmente se caracteriza por ser sencilla o poco cuidadosa, muy común dentro de estos hablantes. Los términos arcaica y antigua aluden a una condición de antigüedad. En el caso de exótica, por su significado usual de extraño o extravagante, no coincide con las características de los hablantes del latín.<br/><br/>Para hallar la segunda palabra es necesario enfocarse en la segunda parte del texto, donde señala que Roma logra victoria tras victoria y con esto consigue imponer el latín. Esta pista permite inferir que el uso de latín se extiende a otros lugares. Los vocablos dividirse, distribuirse y transmitirse se alejan del objetivo de la conquista: la expansión.<br/><br/>Por tanto, los términos que ayudan a completar con sentido lógico son rústica y expandirse. La opción correcta es la 2."
},
{
  "id": 14,
  "title": "Problema 14: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Ambos lugares (un lago ártico helado y una cueva tropical saturada de gases tóxicos) podrían proporcionar claves para resolver uno de los misterios más antiguos y apasionantes del mundo: ¿hay vida fuera de nuestro planeta? Es posible que la vida en otros mundos, ya sea en nuestro sistema solar o en torno a estrellas distantes, tenga que <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> en océanos cubiertos de hielo, como los de Europa, uno de los satélites de Júpiter, o en cuevas llenas de gases, como las que quizás abundan en Marte. Si encontramos la manera de <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> e identificar en la Tierra formas de vida capaces de <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> en ese tipo de ambientes extremos, estaremos un paso más cerca de hallar vida en otros planetas.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(National Geographic, 2018)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?</p>",
  "options": [
    "florecer - aislar - prosperar",
    "prosperar - capturar - mutar",
    "evolucionar - acordonar - variar",
    "mejorar - circundar - evolucionar"
  ],
  "correctAnswer": 0,
  "explanation": "En este ítem se requiere identificar tres palabras que completen con sentido lógico el texto. Para resolver este ítem se debe contextualizar  el significado de cada palabra.<br/><br/>Para identificar la palabra del primer espacio hay que enfocarse en la idea del surgimiento de la vida en ambientes adversos, lo que apunta a una posible relación con los términos florecer o  prosperar. <br/><br/>El término del segundo espacio se relaciona con identificar otras formas de vida en la Tierra. Un posible término sería aislar como un paso previo para su estudio.<br/><br/>Finalmente, en el tercer espacio se pueden asociar los términos prosperar y evolucionar como posibles opciones del surgimiento de la vida en ambientes extremos. La opción correcta es la 1. <br/><br/><div style=\"height: 56.699999999999996px;\"></div>"
},
{
  "id": 15,
  "title": "Problema 15: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    <div style=\"height: 9.45px;\"></div> El storytelling es el arte de contar una historia y aprovechar todos los elementos de su atmósfera para transmitir sensaciones de una forma inolvidable. Consiste en la capacidad de comunicar ideas con la intención de generar un <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span> emocional que marque al espectador y que dé lugar a un espacio de reflexión. \n\t\t\t<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Rodríguez, 2021)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra completa el párrafo anterior con sentido lógico?</p>",
  "options": [
    "vínculo",
    "impacto",
    "ambiente",
    "encuentro"
  ],
  "correctAnswer": 0,
  "explanation": "La resolución de este ítem requiere una lectura cuidadosa del texto y un análisis del contexto para encontrar la palabra que mejor complete el sentido lógico del párrafo.<br/><br/>En el texto se describe el storytelling como el arte de contar historias, con el objetivo de transmitir sensa- ciones de manera que resulten inolvidables. Además, se menciona que el storytelling implica la capacidad de comunicar ideas con la intención de provocar una reacción emocional significativa en el espectador, una reacción que lo impacte y lo lleve a reflexionar.<br/><br/>De las opciones dadas, \"impacto\" es la palabra que mejor se ajusta al contexto. El texto sugiere que el storytelling no solo busca una simple conexión o interacción con el espectador, sino que pretende generar una impresión emocional profunda y duradera. La palabra \"impacto\" capta perfectamente esta idea de una reacción intensa que \"marca al espectador\" y deja una huella emocional, lo cual fomenta un espacio de reflexión.<br/><br/>Las otras opciones no se ajustan completamente a esta intención. Por ejemplo, \"vínculo\" sugiere una relación emocional, pero no necesariamente una reacción intensa. \"Ambiente\" se refiere a la atmósfera en la narración, pero no transmite la idea de una impresión emocional profunda. Finalmente, \"encuentro\" implica una interacción, pero no una reacción emocional fuerte.<br/><br/>Por lo tanto, la palabra que mejor completa el sentido del párrafo es \"impacto\", ya que refleja la intención de generar una reacción emocional intensa y significativa. La opción correcta es la número 2."
},
{
  "id": 16,
  "title": "Problema 16: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Como parte del uso del ingenio se encuentra también el motivo del disfraz, el cual es usado como <span style=\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\"></span>. Un ejemplo de ello es cuando el personaje de Odiseo se disfraza de mendigo en varias ocasiones, no solo a su llegada a Ítaca, sino también antes, durante la guerra de Troya, ciudad en la que entra así como espía y roba el Paladio. <br/>\n\t\t\t<br/><div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Cerdas y Guevara, 2023)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuál palabra completa el párrafo anterior con sentido lógico?</p>",
  "options": [
    "timo",
    "truco",
    "fraude",
    "artimaña"
  ],
  "correctAnswer": 0,
  "explanation": "La resolución de este ítem requiere una lectura cuidadosa del texto y un análisis del contexto para identificar la palabra que mejor complete el sentido lógico del párrafo.<br/><br/>El texto menciona el uso del ingenio y se refiere específicamente al motivo del disfraz, citando ejemplos relacionados con Odiseo. En estos ejemplos, Odiseo se disfraza de mendigo o espía para lograr objetivos estratégicos, como entrar a Troya y robar el Paladio. Estas acciones implican un uso astuto y planificado del disfraz para engañar o confundir a otros sin connotaciones negativas extremas.<br/><br/>Veamos las opciones una por una:\n\\begin{itemize}\n    \\item Timo: Esta palabra tiene una connotación negativa, ya que implica engañar para estafar a alguien. Aunque hay un elemento de engaño en el uso del disfraz, no es el sentido principal que se busca transmitir en el texto.<br/><br/>    \\item Truco: Un \"truco\" implica un engaño menor o una estrategia simple. Aunque puede tener sentido, no transmite completamente la idea de una acción elaborada y astuta que requiere ingenio, como se describe en el texto.<br/><br/>\\item Fraude: Similar al \"timo\", esta palabra tiene una connotación negativa fuerte relacionada con la ilega- lidad o el engaño deshonesto. No es adecuada para describir el contexto estratégico y heroico de Odiseo.<br/><br/>\\item Artimaña: Esta palabra se refiere a una acción astuta, hábil y planeada para lograr un fin mediante el engaño. Se ajusta perfectamente al contexto del disfraz usado por Odiseo, quien recurre a su ingenio y astucia para lograr sus objetivos durante y después de la guerra de Troya.\n\\end{itemize}\nLa palabra que completa el párrafo con sentido lógico es \"artimaña\", ya que refleja el uso del ingenio y del disfraz de una manera estratégica y astuta. Por lo tanto, la opción correcta es la número 4."
},
{
  "id": 17,
  "title": "Problema 17: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Aunque parezca  <u>paradójico</u>, los mensajes más cotidianos son los más difíciles de descifrar porque el hablante, dada la poca <u>trascendencia</u> del mensaje o la rapidez con que debe pensarlo, no tiene mucho tiempo para reflexionar sobre él. <br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Madrigal, 2011)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿cuáles palabras son equivalentes a \"paradójico\" y \"trascendencia\"?</p>",
  "options": [
    "absurdo - importancia",
    "controversial - eficacia",
    "incomprensible - necesidad",
    "cuestionable - consecuencia"
  ],
  "correctAnswer": 0,
  "explanation": "En este ítem se presentan dos palabras subrayadas para encontrar sus respectivos sinónimos en la lista de opciones. Una posible estrategia para resolver este ítem es identificar la semejanza de significados dentro del contexto de cada término.<br/><br/>De acuerdo con el texto, paradójico se refiere a una situación sin sentido de la comunicación cotidiana, por lo tanto, podría ser una situación absurda, controversial e incomprensible, pero no cuestionable.<br/><br/>En el caso de los conceptos eficacia, necesidad y consecuencia, no se presenta una relación de significado con la palabra trascendencia, cuyo significado alude a  importancia y relevancia. De este modo, las palabras que mantienen una relación de sinonimia son absurdo e importancia. La opción correcta es la 1."
},
{
  "id": 18,
  "title": "Problema 18: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    <div style=\"height: 9.45px;\"></div>La idea de que un texto sea capaz de múltiples lecturas es característica de la Edad Media, esa Edad Media tan calumniada y compleja que nos ha dado la arquitectura gótica, las sagas de Islandia y la filosofía escolástica en la que todo está discutido. Que nos dio, sobre todo, la <i>Comedia</i>, que seguimos leyendo y que nos sigue asombrando, que durará más allá de nuestra vida, mucho más allá de nuestras vigilias y que será enriquecida por cada generación de lectores.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Borges, 1980)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Del texto anterior se puede inferir que la Edad Media</p>",
  "options": [
    "ha trascendido gracias a su legado.",
    "ha sido elogiada por sus contribuciones.",
    "será ignorada por las nuevas generaciones.",
    "limitó al lector de la Comedia en muchos sentidos."
  ],
  "correctAnswer": 0,
  "explanation": "Este ítem presenta un texto del que se debe inferir una conclusión  a partir del análisis de sus ideas.<br/><br/>De este se deduce una primera idea acerca de la Edad Media que, a pesar de recibir múltiples críticas, ha dado grandes aportes como la arquitectura, literatura islandesa, filosofía y la <i>Comedia</i>. De este libro se destaca una segunda idea que apunta a la relevancia del libro en las distintas épocas y en el futuro. <br/><br/>Al relacionar ambas ideas se puede concluir que la Edad Media ha sido relevante en tiempos posteriores, es decir, ha trascendido en la historia. En el caso de la afirmación 2, \nse identifica una contradicción con el calificativo de calumniada. Con respecto a las conclusiones 3 y 4, también son contradictorias ante la trascendencia de la Comedia. La opción correcta es la 1."
},
{
  "id": 19,
  "title": "Problema 19: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">\n    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\">\n    <div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div>\n    \n\tEl liderazgo es la función que ocupa una persona que se distingue del resto y es capaz de tomar decisiones acertadas para el grupo, equipo u organización que preceda, inspirando al resto de los que participan de ese grupo a alcanzar una meta común. \n\tLa labor del líder consiste en establecer una meta y conseguir que la mayor parte de las personas deseen y trabajen por alcanzarla. Es un elemento fundamental en los gestores del mundo empresarial, para sacar adelante una empresa u organización, pero también lo es en otros ámbitos, como los deportes (saber dirigir un equipo a la victoria), la educación (profesores que consiguen que sus alumnos se identifiquen con su forma de pensar) y hasta en la familia (padres o hermanos mayores que son tenidos como absoluto ejemplo por parte de sus hijos).<br/>\n\t\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Pérez y Gardey, 2008)</div>   \n\t\n\t<div style=\"height: 9.45px;\"></div>\n\t\n\t<div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div>\n\t\n\tEl estilo de años atrás, jerárquico y decisivo, está dando paso a un nuevo modelo de liderazgo, más colaborativo, ágil e integral. Estos son los tres aspectos clave que los líderes tendrán que reajustar para adaptarse a la nueva realidad laboral.\n\tSi algo caracterizaba a los líderes del antiguo entorno laboral, era la estructura piramidal. Un gran jefe en un despacho grande que dirige la empresa dando órdenes que los empleados ponen en marcha. Compartir información, desarrollar ideas y la toma de decisiones era competencia de unos pocos.\n\tPero hoy en día, cada uno de los empleados en la empresa, de cualquier nivel, ha de ser informado y recibir la capacitación y el poder para alcanzar los objetivos de la compañía.<br/>\n\t\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Guijarro, 2018)</div>\n  </div>\n  </div>\n  <p style=\"margin-top: 20px;\">19. ¿Cuál es una característica del líder presente en solo uno de los textos?</p>",
  "options": [
    "La idoneidad para dirigir al equipo",
    "La capacidad para tomar decisiones",
    "La habilidad para alcanzar las metas",
    "La capacidad de  dirigir en diferentes entornos"
  ],
  "correctAnswer": 3,
  "explanation": "Para resolver este ítem  se deben identificar las características del líder en cada uno de los textos.<br/><br/>El texto 1 señala que un líder  debe tomar decisiones acertadas, establecer metas, motivar a las personas y ser un gestor en diferentes ámbitos. <br/><br/>En el texto 2 se destacan dos modelos de liderazgo en el ámbito empresarial: el tradicional de tipo jerárquico, directivo y autoritario y el actual, más colaborativo e integral.<br/><br/>En este ítem se debe distinguir una característica presente en uno de los textos y al compararlos se encuentra que la  diferencia está en la habilidad de motivar y dirigir en los  diferentes entornos del texto 1. La opción correcta es la 4."
},
{
  "id": 20,
  "title": "Diagramas y Caminos",
  "content": "20. De ambos textos se deduce que una característica del liderazgo es \n\n\t\n\n\n",
  "options": [
    "dirigir equipos en diferentes ámbitos.",
    "impulsar a las personas para alcanzar las  metas.",
    "organizar la información y capacitaciones para el equipo.",
    "desarrollar el potencial de cada persona en una empresa."
  ],
  "correctAnswer": 1,
  "explanation": "La resolución de este ítem implica identificar una característica común del liderazgo en ambos textos. \n\nEn el texto 1 se resalta la importancia de la toma de decisiones, la motivación de los equipos y el logro  de metas como características del liderazgo.\n\nEn el texto 2 se destaca un modelo de liderazgo caracterizado por la colaboración, la participación y el logro de los objetivos. \n\nAl comparar las características del liderazgo en ambos textos se tiene en  común el logro de las metas. La opción correcta es la 2."
},
{
  "id": 21,
  "title": "Problema 21: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    <div style=\"height: 9.45px;\"></div> El cine permite la reunión de personas de distintos estratos sociales en un mismo lugar. Esto ayuda al público a identificarse como colectivo y a generar catarsis frente a los hechos que han marcado su historia.  Son muchas las películas, son diversas sus intenciones, pero cuando el espectador se enfrenta con un filme que lo conmueve, que cuenta con una narrativa que expone una problemática, entonces la experiencia cinematográfica se convierte en un ejercicio sociológico y psicológico.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Arbeláez, 2018)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Considere los siguientes efectos:<p><br>A. Crear una identidad cultural colectiva.</p> <p>B. Hacer una crítica sobre la realidad social.</p> <p>C. Sensibilizar sobre las experiencias de vida.</p> <p>D. Educar al público sobre la vida en sociedad.</p><br> <p>Según el texto, ¿cuáles de los anteriores son efectos del cine en el público?</p>",
  "options": [
    "A y B",
    "A y C",
    "B y D",
    "C y D"
  ],
  "correctAnswer": 1,
  "explanation": "En este ítem  se debe inferir los efectos del cine en el público. Para resolverlo es necesario revisar que cada enunciado se deduzca del texto, en el cual se plantea que la dinámica del cine propicia  un espacio  socializador y humano, en el cual se puede experimentar emociones cuando se ve una película, por lo tanto, se deduce un efecto sensibilizador.<br/><br/>Además, debido a que el espectador pertenece a un colectivo,  comparte una identidad. Entonces, los efectos A y C sí se deducen del texto. <br/><br/>Por otra parte, los efectos B y D no se podrían inferir del texto porque no hay ideas que apoyen al efecto educativo y crítico del cine. La opción correcta es la 2."
},
{
  "id": 22,
  "title": "Problema 22: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Varios artistas del Renacimiento pintaron obras cuyos personajes tenían seis dedos. Aunque una de las hipótesis es que esta cualidad corresponde a un error, otros críticos concluyen que es una decisión deliberada dado el carácter meticuloso de las obras y las variadas interpretaciones del número seis.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Elaboración propia)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones:<p><br>A. Las motivaciones dadas por el artista carecen de importancia para la crítica. </p> <p>B. Los artistas renacentistas eran conscientes de los detalles en su arte.</p> <p>C. Las pinturas del Renacimiento cuentan con un carácter simbólico.</p><br>De las anteriores, ¿cuáles se infieren del texto?</p>",
  "options": [
    "Solo A",
    "Solo C",
    "A y B",
    "B y C"
  ],
  "correctAnswer": 0,
  "explanation": "Para resolver este ítem es necesario analizar las afirmaciones cuidadosamente y determinar cuáles se infieren a partir de la información implícita en el contexto del arte renacentista.  <br/><br/>La afirmación A sostiene que las motivaciones del artista carecen de importancia para la crítica. Esta afirmación no es consistente con el texto, pues indica que los los críticos deliberaron sobre las razones de los seis dedos. Por lo tanto, esta afirmación es falsa.<br/><br/>La afirmación B plantea que los artistas renacentistas eran conscientes de los detalles en su arte. Esta afirmación es verdadera porque es una paráfrasis del texto en donde se indica el carácter meticuloso de la obras.<br/><br/>La afirmación C indica que las pinturas del Renacimiento cuentan con un carácter simbólico. Esta afirmación también es correcta, ya que existen variadas interpretaciones del número seis, lo que propone múltiples significados.<br/><br/>En conclusión, las afirmaciones B y C son las que se pueden inferir  Por lo tanto, la opción correcta es la número 4."
},
{
  "id": 23,
  "title": "Problema 23: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    <div style=\"height: 9.45px;\"></div>Los programas “divertidos” tienen mucho rating $-$y el rating es lo supremo$-$, no importa a costa de qué valor, ni quién lo financia. Son esos programas donde divertirse es degradar, o donde todo se banaliza. Como, si habiendo perdido la capacidad para la grandeza, nos conformáramos con una comedia de regular calidad.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Sábato, 2000)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones:</p><br> <p>A. Los programas culturales tienen poca popularidad.</p> <p>B. Las personas seleccionan el programa según el nivel de audiencia.</p> <p>C. La oferta tiende hacia la superficialidad y el entretenimiento.</p><br> <p>De las anteriores, ¿cuáles se infieren del texto?</p><br>",
  "options": [
    "Solo A",
    "Solo C",
    "A y B",
    "B y C"
  ],
  "correctAnswer": 1,
  "explanation": "En este  ítem se debe determinar  cuáles afirmaciones se infieren a partir del análisis de las ideas del texto. Los tres enunciados deben ser analizados para encontrar su relación con los programas divertidos.<br/><br/>La afirmación A no se puede inferir porque el texto no aporta información de los programas culturales.<br/><br/>La afirmación B menciona que el público selecciona  un programa por su nivel de audiencia, sin embargo, en el texto no está explícito.<br/><br/>Finalmente, de la afirmación C se comprueba que los programas divertidos tienden a contenidos de poca trascendencia y su único objetivo es la diversión. La opción correcta es la 2."
},
{
  "id": 24,
  "title": "Problema 24: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">\n    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\"> <div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div> Es importante tener en cuenta que la empatía es una cualidad de la relación humana, sin la que nuestra mente no hubiera podido estructurarse saludablemente y aprendido a establecer relaciones con el mundo ni consigo misma en una cierta armonía y seguridad, ya que para que seamos capaces de dar sentido a nuestro propio mundo interno alguien ha tenido que hacerlo antes por nosotros.<br/>\n\t\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Artés, 2021)</div><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div> La “empatía” es una habilidad adquirida que se relaciona con las condiciones socioculturales en las que nos criamos y las características estructurales y funcionales en donde transcurren nuestros procesos de socialización, incluyendo la formación escolar y las experiencias tempranas de nuestro “aprendizaje social”.<br/>\n   \n\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Dehter, 2009)</div><br/>\n  </div>\n  </div>\n  <p style=\"margin-top: 20px;\"><b></b></p> <p>Considere las siguientes afirmaciones acerca de la empatía:</p><br> <p>A. Es necesaria para el bienestar del ser humano.</p> <p>B. Es fundamental para el desarrollo mental.</p> <p>C. Es una destreza aprendida con la convivencia.</p><br> <p>De las anteriores, ¿cuáles se infieren de ambos textos?</p>",
  "options": [
    "Solo A",
    "Solo C",
    "A y B",
    "B y C"
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 25,
  "title": "Problema 25: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    <div style=\"height: 9.45px;\"></div> Los griegos desarrollaron una visión religiosa naturalista cimentada en los dioses del Olimpo, expresando sus creencias mediante la poesía y la música; cuando despertaron del mito y la fábula, cuestionaron el origen fantástico de sus conocimientos, surgiendo así la filosofía, que tiene, a partir de entonces, su origen en la razón humana y ya no más en las concepciones míticas. <br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Martínez, 2016)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, la filosofía nace en Grecia debido a</p>",
  "options": [
    "la fama que gozaban los grandes pensadores griegos.",
    "al desarrollo del pensamiento libre propiciado por los griegos.",
    "las condiciones culturales que favorecieron el pensamiento crítico.",
    "las explicaciones mitológicas que fundamentaron el pensamiento crítico."
  ],
  "correctAnswer": 2,
  "explanation": "En este ítem  se debe inferir el nacimiento de la filosofía en Grecia a partir del análisis de las ideas del texto.<br/><br/>El texto plantea una ruptura en las creencias de los griegos, las cuales se basan en una visión religiosa naturalista, para dar paso a un pensamiento basado en la razón. Esta transición propicia un cambio en el pensamiento y los conocimientos de los  griegos. <br/><br/>Por otra parte, en el texto no se mencionan los grandes pensadores, tampoco explica el desarrollo de pensamiento libre y señala que la base del pensamiento crítico es la razón. La opción correcta es la 3."
},
{
  "id": 26,
  "title": "Problema 26: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La palabra simpatía hace referencia a la puesta en común de dos individualidades en un intento de sintonizar emocionalmente, sin que por ello nadie deba hacer abstracción de lo que piensa o siente. Podemos afirmar que la simpatía tiene más que ver con la expresión subjetiva de sentimientos y pensamientos, mientras que la empatía busca la comprensión objetiva del mundo interno del otro.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Artés, 2021)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Según el texto, ¿en qué se basa la diferencia entre simpatía y empatía hacia otras personas?</p>",
  "options": [
    "En el balance con las propias emociones.",
    "En la experimentación de su mundo interior.",
    "En el grado de entendimiento de su mundo interno.% clave",
    "En la identificación imparcial con sus sentimientos."
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 27,
  "title": "Problema 27: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">\n    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\"><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div> En los años noventa, aparecen las computadoras con fuerza en los hogares y con ellas el e-learning o enseñanza a distancia, toda una revolución que facilitó la educación haciéndola más compatible con los horarios laborales y ofreciendo la autonomía que no proporciona el aula física. <br/>\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Pediguer, 2015)</div> \n <br/> <div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div>  En pleno siglo XXI ha bajado la venta de computadoras y es la era del celular y entramos en el m-learning o aprendizaje móvil, el espacio para aprender de forma inalámbrica, en cualquier momento y en cualquier lugar del mundo. <br/>\n\t<br/>\t\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Pediguer, 2015)</div><br/>\n  </div>\n  </div>\n  <p style=\"margin-top: 20px;\">¿Cuál es una idea común en ambos textos?</p>",
  "options": [
    "El uso del celular es el más efectivo para el aprendizaje.",
    "Las computadoras desplazaron la enseñanza tradicional.",
    "La diversificación de los dispositivos ha mejorado la educación.",
    "El uso de los dispositivos ha transformado la educación tradicional."
  ],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 28,
  "title": "Problema 28: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La era de la posverdad  se caracteriza por amoldar los medios de información, y los contenidos, al gusto de los usuarios. Se nos muestra una verdad embellecida y configurada a nuestro gusto, algo que aceptamos como más verdadero que la propia verdad de los hechos.\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Montoya, 2019)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Una conclusión que se infiere del texto anterior es que</p><br> <p>1) las personas deciden el valor de los hechos.</p> <p>2) el aumento de los medios ha configurado la información.</p> <p>3) la redacción atrayente favorece el consumo de la información.</p> <p>4) las personas tienen menos acceso a información crítica y objetiva.</p>",
  "options": [],
  "correctAnswer": 0,
  "explanation": ""
},
{
  "id": 29,
  "title": "Problema 29: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\">\n    <div style=\"column-count: 2; column-gap: 24px; text-align: justify;\"><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 1</div> Desde pequeños nos enseñan a llegar a tiempo a clase, y en muchos colegios y después universidades, no se les permite la entrada a los alumnos que llegan con retraso al aula. Ya que eso hace que se tenga que parar la clase o que suponga una distracción para el resto del alumnado. En definitiva, que una persona llegue tarde resulta un incordio para el resto. Por eso, la primera razón por la que debemos llegar a tiempo es por una cuestión de educación y respeto. \n\tLa puntualidad también puede hacer que el resto de personas del equipo confíen en ti. Si eres puntual, seguramente tendrás otras cualidades como puede ser, por ejemplo, el orden, que representa también a una persona responsable. Ya no solo es cuestión de confianza, de educación o de responsabilidad,  incluso es ser inteligente: llegar antes a los lugares te permitirá aprovechar el tiempo al máximo. Si le das valor a tu tiempo y al de las personas con las que has quedado, no debes llegar tarde. \n\tTampoco ocurre nada si alguna vez llegas tarde, pero que no se convierta en una costumbre.<br/>\n\t\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Martín, 2014)</div>\n\t\n\t<div style=\"height: 18.9px;\"></div><div style=\"text-align: center; font-weight: bold; margin: 15px 0 10px 0;\">Texto 2</div> La puntualidad es la cortesía de las personas inteligentes y comprensivas que saben que los demás tienen otras ocupaciones, aparte de las que nosotros les queremos imponer. El desprestigio, soslayo o incumplimiento de la gentileza que encierra esta palabra no obedece a los nuevos tiempos del caótico posmodernismo, pues lamentablemente parece que ya venía con algunos ancestros muy lejanos en el ADN de los pueblos latinos. Si pudiéramos sumar los minutos que llegamos tarde a las citas o que llegan retrasados nuestros trabajadores, y pudiéramos calcular un costo promedio por hora, así como se calculan las pérdidas por el atasco automovilístico, entonces estaríamos en capacidad de comprender la pérdida colectiva, el desperdicio nacional, que representa el desprecio por esta palabra. \n\n\t<div style=\"text-align: right; margin-top: 10px; font-style: italic; color: #555;\">(Morales, 2014)</div>\n  </div>\n  </div>\n  <p style=\"margin-top: 20px;\">29. De ambos textos se deduce que la impuntualidad genera</p>",
  "options": [
    "un hábito que\n\tproduce desconfianza.",
    "un juicio negativo que afecta a las personas.",
    "un proceder que no tiene graves consecuencias.",
    "un comportamiento que conlleva pérdidas económicas."
  ],
  "correctAnswer": 0,
  "explanation": "La resolución de este ítem implica identificar las ideas relacionadas con la impuntualidad en cada uno de los textos. En el texto 1 se deduce que la impuntualidad genera retrasos, molestias, desconfianza e implica falta de inteligencia. En el texto 2 se deduce que  la impuntualidad es una falta de cortesía, desprestigio y conlleva a pérdidas en la productividad.<br/><br/>El siguiente paso es comparar las ideas del texto 1 y 2 para encontrar las características comunes a la impuntualidad como desconfianza, falta de inteligencia, descortesía y desprestigio. Por lo tanto, se puede concluir que estas características generan un juicio negativo hacia las personas. La opción correcta es la  2."
},
{
  "id": 30,
  "title": "Diagramas y Caminos",
  "content": "Considere las siguientes consecuencias:\n<ul class=\"latex-list\"><li><BR>A.<span> Mayor productividad.</span></li><li>B.<span> Asegurar el ingreso a clases.</span></li><li>C.<span> Menos distracción para los demás.</span></li></ul><br>\n\n¿Cuáles se mencionan en ambos textos como consecuencias de la puntualidad?\n\n\n\n\n[arc=3mm,breakable,colback=gray!10]",
  "options": [
    "A y B",
    "B y C",
    "Solo A",
    "Solo C"
  ],
  "correctAnswer": 2,
  "explanation": "La resolución de este ítem implica realizar la comparación de ideas acerca de las consecuencias sobre la puntualidad.\n\nEl paso siguiente es identificar la presencia de las consecuencias A, B y C en cada texto. La primera se refiere a la productividad, la cual se identifica en ambos textos, específicamente el texto 1 señala el aprovechamiento del tiempo y el texto 2 explica el costo promedio por hora. \n\nFinalmente, se buscan las consecuencias B y C  en ambos textos, las cuales se presentan únicamente  en el texto 1. La opción correcta es la 3."
},
{
  "id": 31,
  "title": "Problema 31: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    <div style=\"height: 9.45px;\"></div> Muchos movimientos artísticos surgieron por una necesidad de expresar, transmitir pensamientos y creencias sociales y culturales. El arte callejero, al integrar sus elementos en lugares públicos bastante transitados, pretende sorprender a los espectadores. Suele tener un llamativo mensaje subversivo que critica a la sociedad con ironía e invita a la lucha social, la crítica política o, simplemente, a la reflexión.\n\t\t\tPor otro lado, no todos los artistas buscan transmitir un pensamiento, sino que algunos son más espontáneos, pintan sin pensar demasiado en qué desean transmitirle a la sociedad.\n\t\t\tDebido a esto es que la mayoría de las obras se sale de los parámetros establecidos en el mundo del arte. Son desprolijas, no contienen muchos detalles y están hechas de manera apresurada sin un análisis previo.\n\t\t\tLos temas utilizados por los distintos artistas adeptos al arte callejero son diversos, pero siempre buscan provocar y sobre todo persuadir a la sociedad.<br/>\n    <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Villalba, 2011)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Considere las siguientes definiciones:</p><br> <p>A. Forma de expresión que invita a la crítica y a la rebeldía.</p> <p>B. Creaciones que exploran diferentes manifestaciones artísticas.</p> <p>C. Tendencia nacida para transmitir el sentimiento de una generación.</p><br> <p>Según el texto, ¿cuáles de las anteriores definen el arte callejero?</p>",
  "options": [
    "Solo A",
    "A y C",
    "Solo B",
    "B y C"
  ],
  "correctAnswer": 0,
  "explanation": "La resolución de este ítem  requiere de una lectura atenta y de la verificación  de las definiciones en el texto. <br/><br/>La opción A se deduce  a partir de la idea de que el arte transmite  pensamientos y creencias de una sociedad, de una manera subversiva, irónica y crítica. <br/><br/>La B no se puede inferir del texto porque no se describen las manifestaciones, solo se especifica que las obras no cumplen con los parámetros establecidos por el arte y  tienen  pocos detalles.   <br/><br/>La  C no se puede deducir del texto porque se afirma que el surgimiento de este movimiento es una forma de expresión, de creencias sociales y culturales y no de una generación. La opción correcta es la 1."
},
{
  "id": 32,
  "title": "Problema 32: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    La literatura como arte produce goce estético, pero también aporta conocimientos, informaciones, maneras de ver el mundo; asimismo, nos enfrenta a los valores más intrínsecos de la especie humana como la solidaridad, el respeto, el amor, la convivencia. Además, nos despierta la sensibilidad y la imaginación, ya que abre nuestros sentidos hacia otros mundos creados y por crearse, a conectarnos con otros modos de sentir. Por otra parte, nos ofrece modelos que contribuyen a mejorar la expresión escrita. La literatura nos proporciona un abanico de posibilidades y estilos que nos enriquecen en muchos sentidos. <br/>(Flores, 2018)\n    \n  </div>\n  <p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones sobre la literatura:</p><br> <p>A. Usa la creatividad para conocer diferentes contextos.</p> <p>B. Favorece la innovación de la escritura.</p> <p>C. Cumple diversas funciones: artística, social y educativa.</p><br> <p>De las anteriores, ¿cuáles se infieren del texto?</p>",
  "options": [
    "Solo A",
    "B y C",
    "Solo C",
    "A y B"
  ],
  "correctAnswer": 0,
  "explanation": "La resolución de este ítem requiere analizar cuidadosamente cada afirmación para determinar cuáles se infieren del texto.<br/><br/>El texto presenta a la literatura como una forma de arte que produce goce estético, aporta conocimientos, fomenta la sensibilidad y transmite valores como la solidaridad, el respeto y la convivencia. También menciona que ayuda a mejorar la expresión escrita.<br/><br/>La afirmación A, sobre usar la creatividad para conocer diferentes contextos, no se puede inferir, ya que el texto no menciona ese propósito específico. La afirmación B, que sugiere que la literatura favorece la innovación en la escritura, tampoco se deduce, ya que se habla de mejorar la expresión escrita, no de innovarla. En cambio, la afirmación C, que sostiene que la literatura cumple funciones artísticas, sociales y educativas, sí se puede inferir porque el texto menciona el goce estético, la transmisión de valores y el aporte a la expresión escrita. Por lo tanto, la opción correcta es la número 3."
},
{
  "id": 33,
  "title": "Problema 33: Comprensión lectora",
  "content": "<div style=\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\">\n    Existe una obra literaria escrita en la Edad de Oro del Islam conformada por relatos de varios escritores provenientes de Asia y África. El libro innova por su gran cantidad de técnicas narrativas, por ejemplo, él mismo puede definirse como un relato enmarcado, es decir, conformado por una historia principal, que abarca otras. \n <div style=\"text-align: right; margin-top: 10px; font-style: normal; color: #555;\">(Elaboración propia)</div>\n  </div>\n  <p style=\"margin-top: 20px;\">Considere las siguientes afirmaciones:</p><br> <p>A. La literatura de la Edad Media del Islam se conformó exclusivamente de autores asiáticos y africanos.</p> <p>B. La historia enmarcada corresponde a una forma original de estructurar la narración. </p> <p>C. La diversidad cultural influye en esa obra literaria de la Edad de Oro islámica.</p><br><p>De las anteriores, ¿cuáles se infieren del texto?</p>",
  "options": [
    "Solo A",
    "Solo C",
    "A y B",
    "B y C % clave"
  ],
  "correctAnswer": 0,
  "explanation": "La resolución de este ítem requiere una lectura detallada y una cuidadosa verificación de las afirmaciones presentadas en el texto.<br/><br/>La afirmación A, que sostiene que la literatura de la Edad Media del Islam se conformó exclusivamente de autores asiáticos y africanos, no se puede deducir del texto. Aunque se menciona que los relatos provienen de escritores de Asia y África, no se afirma en ningún momento que estos sean los únicos autores. La palabra \"exclusivamente\" restringe demasiado la afirmación y no está justificada por la información proporcionada.<br/><br/>Por otro lado, la afirmación B sí se puede inferir. El texto destaca que la obra literaria innova por su uso de diversas técnicas narrativas y menciona que puede definirse como un relato enmarcado. Esta descripción implica que el relato enmarcado es una forma original y particular de estructurar la narración.<br/><br/>Asimismo, la afirmación C también se deduce del texto. Se menciona que los relatos provienen de escritores de distintas regiones —Asia y África—, lo que sugiere una influencia de diversas culturas en la obra literaria. Esta diversidad cultural es una característica implícita de la literatura de la Edad de Oro islámica.<br/><br/>En conclusión, no se puede deducir la afirmación A, pero sí se pueden inferir las afirmaciones B y C. Por lo tanto, la opción correcta es la número 4."
},
{ "id": 34,   
  "title": "Ejercicio Matemático",   
  "content": "34. Considere la siguiente información: \n\n<ul class=\"nested-list\"><li class=\"nested-list-item\"><span class=\"list-label\"><br>A.</span><pr> Cada persona tiene un único documento de identidad.</pr></li><li class=\"nested-list-item\"><span class=\"list-label\">B.</span><pr> La papeleta presidencial presenta varios candidatos presidenciales.</pr></li><li class=\"nested-list-item\"><span class=\"list-label\">C.</span><pr> Una persona con documento de identidad tiene la opción de elegir entre varios candidatos en la papeleta presidencial.</pr></li></ul><br>\n\nLos objetos anteriores se relacionan según las siguientes reglas:<br><br>• La relación de un objeto con un objeto se simboliza: \t\t1$ → $1</div></li><li class=\"nested-list-item\">• La relación de un objeto con varios objetos se simboliza: \t\t1$ → $N</div></li><li class=\"nested-list-item\">• La relación de varios objetos con varios objetos se simboliza: \tN$ → $N</div></li><li class=\"nested-list-item\">• La relación de varios objetos con un objeto se simboliza:\t\tN$ → $1</div></li></ul>\n\n<br>¿Cómo se representa la relación de los objetos: persona $ → $ documento de identidad $ → $ papeleta presidencial?",   "options": [     "1$\\rightarrow$1$\\rightarrow$1",     "1$\\rightarrow$1$\\rightarrow$N",     "1$\\rightarrow$N$\\rightarrow$N",     "1$\\rightarrow$N$\\rightarrow$1"   ],   "correctAnswer": 1,   "explanation": "\\end{tcolorbox}\nEste ítem presenta tres premisas y las reglas que determinan la relación entre cada una de ellas. Una posible estrategia para resolver este ítem es el desarrollo de cada premisa según las reglas descritas.\nNote que para la primera premisa se describe una relación $1 → 1$, pues se establece que a cada persona le corresponde un único documento de identidad.\n\n\t<img src=\"secciones/figuras/ejercicio4.2.pdf\" alt=\"Gráfico: secciones/figuras/ejercicio4.2.pdf\" class=\"latex-resource\">    \n\n\nLa segunda premisa determina que la papeleta presidencial muestra varios candidatos presidenciales. Observe que la relación entre una persona con documento de identidad y los candidatos presidenciales es $1 →  N$, pues cada persona tiene la opción de elegir entre varios candidatos en una misma papeleta.<br>\n\n\t<img src=\"secciones/figuras/ejercicio4.3.pdf\" alt=\"Gráfico: secciones/figuras/ejercicio4.3.pdf\" class=\"latex-resource\">    \n\n\nFinalmente, la premisa C describe que una persona con su documento de identidad puede elegir entre varios candidatos dentro de la papeleta presidencial.\n\nLa relación persona $ → $ documento de identidad $ → $ papeleta presidencial está dada por las dos relaciones descritas, pues para que una persona se relacione con los diferentes candidatos presidenciales ($1 →  N$), primero debe cumplir la relación persona $ → $ documento de identidad ($1 →  1$). <br>\n\n\t<img src=\"secciones/figuras/ejercicio4.1.pdf\" alt=\"Gráfico: secciones/figuras/ejercicio4.1.pdf\" class=\"latex-resource\">    \n\nFinalmente, la relación de los objetos persona $ → $ documento de identidad $ → $ candidatos presidenciales es $1 → 1 →  N$.\n\n\t<img src=\"secciones/figuras/ejercicio4.4.pdf\" alt=\"Gráfico: secciones/figuras/ejercicio4.4.pdf\" class=\"latex-resource\">    \n\nLa opción correcta es la 2."
},
{
  "id": 35,
  "title": "Diagramas y Caminos",
  "content": "Considere el siguiente diagrama:\n\n\n<div class=\"latex-image\">\n <div style=\"font-size: 2em; margin-bottom: 5px;\">📍</div>\n <strong>Gráfico Externo:</strong><br>secciones/figuras/diagrama/letras\n </div><br>\n\nTome en cuenta las siguientes instrucciones:\n<ul class=\"latex-list\"><li><b>A.</b><span>El diagrama representa posibles caminos para ir de <span class=\"framebox\">INICIO</span> a <span class=\"framebox\">FIN</span>.</span></li><li><b>B.</b><span>Se señalan cinco etapas y los cuadros con números indican la finalización de la etapa respectiva.</span></li><li><b>C.</b><span>Una de las etapas es totalmente independiente y no es necesaria para llegar al final. Las otras cuatro deben cumplirse en orden numérico ascendente.</span></li><li><b>D.</b><span>Las flechas indican la o las direcciones posibles y no es necesario seguirlas todas para completar un proceso. Cuando se equivoque, usted puede retroceder hasta donde sea necesario.</span></li><li><b>E.</b><span>Por un cuadro cualquiera puede pasarse más de una vez. Cada vez que se pide un número de cuadros debe tomarse en cuenta el de partida y el de llegada.</span></li></ul><br>\n ¿Cuántos caminos hay para llegar a <span class=\"framebox\">1</span> saliendo de <span class=\"framebox\">INICIO</span>?\n\n\n\n\n",
  "options": [
    "2",
    "3",
    "4",
    "Más de 4"
  ],
  "correctAnswer": 3,
  "explanation": "La resolución de este ítem requiere de una lectura atenta de las instrucciones  y luego relacionarlas con el diagrama mostrado. Posteriormente, se siguen las indicaciones para resolver el proceso solicitado en el ítem.\n\nPara llegar a <span class=\"framebox\">1</span> se pueden tomar los siguientes\ncaminos:\n<ul class=\"latex-list\"><li><b>1)</b><span>Inicio$ → $B$ → $Z$ → $G$ → $1</span></li><li><b>2)</b><span>Inicio$ → $B$ → $Z$ → $H$ → $J$ → $K$ → $1</span></li><li><b>3)</b><span>Inicio$ → $D$ → $3$ → $L$ → $F$ → $G$ → $1</span></li><li><b>4)</b><span>Inicio$ → $D$ → $A$ → $3$ → $L$ → $F$ → $G$ → $1</span></li><li><b>5)</b><span>Inicio$ → $C$ → $F$ → $3$ → $L$ → $F$ → $G$ → $1</span></li></ul>\nPuede observarse que existen más de 4 caminos para llegar a \\fbox{1} partiendo de <span class=\"framebox\">INICIO</span>.  La opción correcta es la 4.<br>"
}
]