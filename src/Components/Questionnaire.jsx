import React from 'react'
import './Questionnaire.css'

export const Question1 = () => {
  return (
    <>
      <h2 className='title'>Les travaux concernent:</h2>

      <div className='options__container'>
        <div className='option'>
          <label htmlFor='maison'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/maison%20new.61ee97c06dee05.85677018.jpg" alt="Une maison" />
            <p>Une maison</p>
          </label>
          <input id='maison' type='radio' name='logement' required/>
        </div>

        <div className='option'>
          <label htmlFor='appartement'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-44-45.61ee950314b615.09474320.jpg" alt="Un appartement" />
            <p>Un Appartement</p>
          </label>
          <input id='appartement' type='radio' name='logement'/>
        </div>
      </div>
    </>
  )
}

export const Question2 = () => {
  return (
    <>
      <div className='title'>
        <h2>Quelle est la surface habitable de votre logement ?</h2>
        <p>Surface en m²</p>
      </div>    

      <input type='number' placeholder='Ex: 23' min='0'/>
    </>
  )
}

export const Question3 = () => {
  return (
    <>
      <div className='title'>
        <h2>Quelle est l’énergie de chauffage actuelle de votre logement ?</h2>
        <p>Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale</p>
      </div>    

      <div className='options__container options__container--small-card'>
        <div className='option option--small-card'>
          <label htmlFor='fioul'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/icon%20.61ee98ab4f2903.12289323.jpg" alt="Chauffage au fioul" />
            <p>Chauffage au fioul</p>
          </label>
          <input id='fioul' type='radio' name='chauffage' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='electrique'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/icon.61ee98c05d3ab9.69489558.jpg" alt="Chauffage Electrique" />
            <p>Chauffage Electrique</p>
          </label>
          <input id='electrique' type='radio' name='chauffage' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='gaz'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07.61ee98d05692f6.80732509.jpg" alt="Chauffage au gaz" />
            <p>Chauffage au Gaz</p>
          </label>
          <input id='gaz' type='radio' name='chauffage' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='bois'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%202.61ee98e4e96377.16161700.jpg" alt="Chauffage au bois" />
            <p>Chauffage au Bois</p>
          </label>
          <input id='bois' type='radio' name='chauffage' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='charbon'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%204.61ee98f8cc03f5.01959819.jpg" alt="Chauffage au charbon" />
            <p>Chauffage au Charbon</p>
          </label>
          <input id='charbon' type='radio' name='chauffage' required/>
        </div>
      
        <div className='option option--small-card'>
          <label htmlFor='chaleur'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%203.61ee990bc0d2f5.71543942.jpg" alt="Pompe à chaleur" />
            <p>Pompe à Chaleur</p>
          </label>
          <input id='chaleur' type='radio' name='chauffage' required/>
        </div>
      </div>
    </>
  )
}

export const Question4 = () => {
  return (
    <>
      <div className='title'>
        <h2>Quels travaux souhaitez-vous réaliser dans votre logement ?</h2>
        <p>Pompe à chaleur</p>
      </div>    

      <div className='options__container options__container--small-card'>
        <div className='option option--small-card'>
          <label htmlFor='air-eau'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.51.30.61eeb7113d7776.98732913.png" alt="Pompe à chaleur air et eau" />
            <p>Pompe à chaleur</p>
            <p>Air/Eau</p>
          </label>
          <input id='air-eau' type='radio' name='travaux' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='géothermique'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.05.61eeb71f523127.05406935.png" alt="Pompe à chaleur géothermique" />
            <p>Pompe à chaleur</p>
            <p>Géothermique</p>
          </label>
          <input id='géothermique' type='radio' name='travaux' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='air-air'>
            <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07.61ee98d05692f6.80732509.jpg" alt="Pompe à chaleur Air" />
            <p>Pompe à chaleur</p>
            <p>Air/Air</p>
          </label>
          <input id='air-air' type='radio' name='travaux' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='hybride'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.06.61eeb745b58790.64830040.png" alt="Pompe à chaleur hybride" />
            <p>Pompe à chaleur</p>
            <p>Hybride</p>
          </label>
          <input id='hybride' type='radio' name='travaux' required/>
        </div>
      </div>
    </>
  )
}

export const Question5 = () => {
  return (
    <>
      <div className='title'>
        <h2>Quelle surface sera chauffée par la pompe à chaleur ?</h2>
        <p>Surface en m²</p>
      </div>    

      <input type='number' placeholder='Ex: 23' min='0'/>
    </>
  )
}

export const Question6 = () => {
  return (
    <>
      <h2>Où en êtes-vous dans votre projet ?</h2>

      <div className='options__container options__container--small-card'>
        <div className='option option--small-card'>
          <label htmlFor='reflexion'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.40.61eeb7b71bbea9.17524732.png" alt="réflexion en cours" />
            <p>Je réfléchis à mes travaux</p>
          </label>
          <input id='reflexion' type='radio' name='projet' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='artisan'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.41.61eeb7ce7ce055.92401019.png" alt="recherche artisan" />
            <p>Je recherche un artisan RGE</p>
          </label>
          <input id='artisan' type='radio' name='projet' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='devis-a-signer'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.43.61eeb7e1bb2ff2.88127133.png" alt="devis à signer" />
            <p>Je vais signer mon devis</p>
          </label>
          <input id='devis-a-signer' type='radio' name='projet' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='devis-signe'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.43.61eeb7e1bb2ff2.88127133.png" alt="devis signé" />
            <p>J'ai déjà signé mon devis</p>
          </label>
          <input id='devis-signe' type='radio' name='projet' required/>
        </div>
      </div>
    </>
  )
}

export const Question7 = () => {
  return (
    <>
      <div className='title'>
        <h2>Où se situe le logement concerné par les travaux ?</h2>
        <p>Cette information est nécessaire car le montant d'aides peut varier en fonction de votre localisation</p>
      </div>    

      
      <label htmlFor='code-postal'>
        <input id='code-postal' type='number' placeholder='Ex: 75000' min='0'/>
        <p className='label--code-postal'>Code Postal</p>
      </label>
    </>
  )
}

export const Question8 = () => {
  return (
    <>
      <h2>Dans ce logement, vous êtes :</h2>

      <div className='options__container options__container--small-card'>
        <div className='option option--small-card'>
          <label htmlFor='proprietaire-occupant'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.38.61eeb83ddeb765.03482046.png" alt="propriétaire occupant" />
            <p>Propriétaire occupant</p>
          </label>
          <input id='proprietaire-occupant' type='radio' name='statut' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='proprietaire-residence-secondaire'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.40.61eeb8454f4977.86500467.png" alt="propriétaire d'une résidence secondaire" />
            <p>Propriétaire d'une résidence secondaire</p>
          </label>
          <input id='proprietaire-residence-secondaire' type='radio' name='statut' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='proprietaire-bailleur'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.42.61eeb84da4fd80.22554435.png" alt="propriétaire bailleur" />
            <p>Propriétaire bailleur</p>
          </label>
          <input id='proprietaire-bailleur' type='radio' name='statut' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='locataire'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.45.61eeb856cf7421.07700481.png" alt="locataire" />
            <p>Locataire</p>
          </label>
          <input id='locataire' type='radio' name='statut' required/>
        </div>
      </div>
    </>
  )
}

export const Question9 = () => {
  return (
    <>
      <div className='title'>
        <h2>À combien s'élève le revenu total de votre foyer fiscal ?</h2>
        <p>Cette information est nécessaire pour calculer plus précisément le montant de vos aides</p>
      </div>    

      <div className='options__container options__container--small-card'>
        <div className='option option--small-card'>
          <label htmlFor='tranche1'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.24.01.61eeb86b317df8.05585385.png" alt="inférieur à 37 232 €" />
            <p>Inférieur à 37 232 €</p>
          </label>
          <input id='tranche1' type='radio' name='revenu' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='tranche2'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.24.02.61eeb8723dddf8.59158804.png" alt="entre 37 232 € et 45 326 €" />
            <p>Entre 37 232 € et 45 326 €</p>
          </label>
          <input id='tranche2' type='radio' name='revenu' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='tranche3'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.24.05.61eeb8799beb34.32022911.png" alt="entre 45 326 € et 67 585 €" />
            <p>Entre 45 326 € et 67 585 €</p>
          </label>
          <input id='tranche3' type='radio' name='revenu' required/>
        </div>

        <div className='option option--small-card'>
          <label htmlFor='tranche3'>
            <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.24.07.61eeb880d7e6d5.25632314.png" alt="Supérieur à 67 585 €" />
            <p>Supérieur à 67 585 €</p>
          </label>
          <input id='tranche3' type='radio' name='revenu' required/>
        </div>
      </div>
    </>
  )
}

export const Question10 = () => {
  return (
    <>
      <h2>Nom Complet</h2>

      <input type='text' placeholder='Prénom' minLength='2'/>
      <input type='text' placeholder='Nom de famille' minLength='2'/>
    </>
  )
}

export const Question11 = () => {
  return (
    <>
      <div className='title'>
        <h2>Quel est votre numéro de téléphone ?</h2>
        <p>Vous acceptez d’être rappelé gratuitement par l’un de nos experts pour faire avancer votre projet.</p>
      </div>

      <label htmlFor='tel'>
        <input type='tel' id='tel' placeholder='Téléphone' pattern="[0]{1}[0-9]{1}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"/>
        <p className='label--tel'>Format: 01-23-45-67-89</p>
      </label>
    </>
  )
}

export const Question12 = () => {
  return (
    <>
      <h2>Email</h2>

      <input type='email' placeholder='exemple@exemple.com'/>
    </>
  )
}

export const Question13 = () => {
  return (
    <>
      <div className='title'>
        <h2>Planifier mon rendez-vous téléphonique</h2>
        <p>Choisir une date ainsi qu’une heure à laquelle un expert du bureau d’études peux vous appeler</p>
      </div>

      <div className='container__date-picker'>
        <input type='date' className='date'/>
        <input type='time' className='time'/>
      </div>
    </>
  )
}