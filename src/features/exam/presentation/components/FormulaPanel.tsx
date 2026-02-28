import React from 'react';
import MathJaxHtml from '../../../../shared/ui/MathJaxHtml/MathJaxHtml';
import styles from '../styles/examPresentation.module.css';

interface FormulaPanelProps {
  showFormulas: boolean;
  onToggle: () => void;
}

const FormulaPanel: React.FC<FormulaPanelProps> = ({ showFormulas, onToggle }) => {
  if (!showFormulas) return null;

  return (
    <div className={styles.formulasBox}>
      <div className={styles.formulasTitle}>
        Formulas y Conceptos Basicos
        <button className={styles.closePanelButton} onClick={onToggle} aria-label="Cerrar formulas">
          ×
        </button>
      </div>
      <div className={styles.formulasIntro}>
        <p>Seguidamente, encontrara una serie de relaciones matematicas basicas y formulas que podra consultar durante la prueba.</p>
      </div>

          <div className={styles.formulasContent}>
            <ol className={styles.formulasList}>
              <li>Un numero primo es un numero natural mayor que 1 que tiene solamente dos divisores positivos diferentes.</li>
              <li>Dos angulos opuestos por el vertice son congruentes.</li>
              <li>Bisecar se define como dividir un objeto geometrico en dos partes congruentes.</li>
              <li>
                En un triangulo isosceles:
                <ol type="a" className={styles.subList}>
                  <li>Dos lados son congruentes.</li>
                  <li>A lados congruentes se oponen angulos congruentes y viceversa.</li>
                </ol>
              </li>
              <li>
                En un triangulo equilatero:
                <ol type="a" className={styles.subList}>
                  <li>Los tres lados son congruentes.</li>
                  <li>Los tres angulos internos son congruentes.</li>
                </ol>
              </li>
              <li>
                <strong>Figuras de dos dimensiones:</strong>
                <div className={styles.formulasTableContainer}>
                  <table className={styles.formulasTable}>
                    <thead>
                      <tr>
                        <th>Figura</th>
                        <th>Perimetro</th>
                        <th>Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><MathJaxHtml text="Circunferencia" /></td>
                        <td><MathJaxHtml text="$P = 2\\pi r$" /></td>
                        <td><MathJaxHtml text="$A = \\pi r^2$" /></td>
                      </tr>
                      <tr>
                        <td><MathJaxHtml text="Rectangulo de dimensiones $l$ y $a$" /></td>
                        <td><MathJaxHtml text="$P = 2l + 2a$" /></td>
                        <td><MathJaxHtml text="$A = la$" /></td>
                      </tr>
                      <tr>
                        <td><MathJaxHtml text="Cuadrado de lado $l$" /></td>
                        <td><MathJaxHtml text="$P = 4l$" /></td>
                        <td><MathJaxHtml text="$A = l^{2}$" /></td>
                      </tr>
                      <tr>
                        <td><MathJaxHtml text="Triangulo de lados $a,b$ y $c$ y altura $h$ sobre la base $b$" /></td>
                        <td><MathJaxHtml text="$P = a + b + c$" /></td>
                        <td><MathJaxHtml text="$A = \\frac{bh}{2}$" /></td>
                      </tr>
                      <tr>
                        <td><MathJaxHtml text="Triangulo equilatero de lado $l$" /></td>
                        <td><MathJaxHtml text="$P = 3l$" /></td>
                        <td><MathJaxHtml text="$A = \\frac{l^2 \\sqrt{3}}{4}$" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ol>
          </div>
        </div>
  );
};

export default FormulaPanel;
