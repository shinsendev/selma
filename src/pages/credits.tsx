import React from "react";
import Layout from "../templates/layout/layout";
import "../styles/page.css";
import { Container, Paper } from "@material-ui/core"

const CreditsPage = () => {

  return (
    <div className="credits-container">
      <Layout>
        <Container maxWidth="md" className="container">
          <Paper elevation={0} className="content-wrapper">
            <h1>Credits</h1>

            <h2>How to cite this website</h2>

            <ul>
              <li>[FR] M. Chabrol (dir.), G. Darquié (codir.), P.-O. Toulza (codir.), Musical MC² [en ligne] http://mc2.labex-arts-h2h.univ-paris8.fr/</li>
              <li>[EN] M. Chabrol (ed.), G. Darquié (coed.), P.-O. Toulza (coed.), Musical MC² [online] http://mc2.labex-arts-h2h.univ-paris8.fr/</li>
            </ul>

            <h2>Phase 1 (2015-2017) :  prototype development</h2>

            <p>Projet Musical MC² (Le film musical hollywoodien en contexte médiatique et culturel) & Labex Arts-H2H</p>

            <h3>Project steering</h3>
            <p>Marguerite Chabrol & Pierre-Olivier Toulza</p>

            <h3>Design of the digital platform</h3>
            <p>Marguerite Chabrol & Gaétan Darquié</p>

            <h3>Consulting and technical support</h3>
            <p>Mehdi Bourgeois</p>

            <h3>Développement / Computing development</h3>
            <p>Mehdi Bourgeois, Gaétan Darquié, Melvin Gault, Tiffany Vachez</p>

            <h3>International scientific committee</h3>
            <p>Marion Carrot, Marguerite Chabrol, Steven Cohan, Todd Decker, Aurélie Ledoux, Adrienne McLean, Karen McNally, Doug Reside, Allison Robbins, Robynn Stilwell, Pierre-Olivier Toulza.</p>

            <h3>Data entry</h3>

            <p>Todd Anderson, Fanny Beuré, N. T. Binh, Caleb Boyd, Marion Carrot, Marguerite Chabrol, Brenna Cunningham, Todd Decker, Claudia Gutierrez, Isabelle Kalma, Aurélie Ledoux, Grace Maxwell, Ashley Pribyl, Caroline Renouard, Allison Robbins,  Megan Salisbury, Noah Teichner, Jalil Tuggle, Pierre-Olivier Toulza, Alyse Weatherford.</p>

            <h3>Junior researchers contracts</h3>

            <ul>
              <li>Caleb Boyd, été 2017, Research Assistant (Department of Music, Washington University in St Louis)</li>
              <li>Gaétan Darquié IGR 6 mois en 2015, 5 mois en 2016 et post-doctorat en 2016/2017 (Université Paris 8 / Labex Arts-H2H)</li>
              <li>Marion Carrot IGE 3 mois en 2016 et 5 mois en 2017 (Université Paris 8 / Labex Arts-H2H)</li>
              <li>Isabelle Kalma IGE 4 mois en 2016, 2 mois en 2017 (CERILAC Université Paris Diderot)</li>
              <li>Ashley Pribyl, été 2017, Research Assistant (Department of Music, Washington University in St Louis).</li>
            </ul>

            <h2>Phase 2 (2018-2020) : tests, exploitation and prospects</h2>

            <p>Etudiant.e.s du Master 2 Cinéma et audiovisuel (Paris 8) / Master’s Degree Students from Paris 8 University
              2018/2019 : Marine Despiegelaere, Boualem Khelifati, Amine Kouti, Inès Lopez, Federico Nipoli, Madoka Nishino, Brian Thomas, Victor Tsaconas, Jingling Wu.</p>

            <p>2019/2020 : Mélanie Birot, Esteban Carrillo, Jean-Baptiste Heimburger, Minhyoug Jo, Joshua Lehoux, Clément Marin, Théo Mathis, Anne Milojevic, Kira Vygrivach, Wei Zhao.</p>

            <h2>Phase 3 (2020-?) : creation of the new website</h2>

            <p>...</p>
          </Paper>
        </Container>
      </Layout>
    </div>
  )
}
export default CreditsPage;