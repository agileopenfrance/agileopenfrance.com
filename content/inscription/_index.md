---
title: "Inscriptions"
featured_image: "/img/inscription.jpg"
menu: "main"
---

**tl;dr [Inscrivez-vous dès maintenant au tirage au
sort](https://framaforms.org/participer-au-tirage-au-sort-aof-2020-hiver-1571860404),
si votre nom est tiré, vous aurez deux jours pour acheter votre billet.**

## Tirage au sort ???

Cette année encore, on essaie d'expérimenter quelque chose de nouveau dans le
processus d'inscription pour qu'il soit plus simple à vivre pour tout le monde.
Les places de la majorité des participant·es seront tirées au sort. Une
minorité sera invitée directement par les organisateurs (Bernard Notarianni,
Raphaël Pierquin et Emmanuel Gaillot).

Les inscriptions pour participer (gratuitement) au tirage au sort sont ouvertes
dès maintenant. Le processus de tirage au sort commencera le 7 novembre 2019.

Vous pouvez dès maintenant faire [une contribution solidaire](/billetterie),
qui nous permettra de financer des places à demi-tarif pour des personnes moins
aisées.

## Description détaillée

En français dans le texte, ça donne ceci :

- Inscrivez votre nom dès maintenant dans [ce
  formulaire](https://framaforms.org/participer-au-tirage-au-sort-aof-2020-hiver-1571860404)
- Si vous êtes chanceux·se vous serez tiré·e au sort, entre le 7 novembre
  et (probablement) la mi-décembre. Nous vous contacterons alors pour que
  vous puissiez confirmer votre participation en achetant votre billet.
- Vous aurez 48 heures pour acheter votre billet sur Yuticket, à l'aide
  d'un code personnel qui vous sera communiqué.
- Si vous n'avez pas acheté votre billet dans les 48 heures, votre place
  sera remise en jeu. Nous tirerons au sort 5 places à la fois toutes les
  72 heures, jusqu'à ce qu'il n'y ait plus de place disponible.


## En pseudo-code

```
personnes_inscrites = []
personnes_inscrites += [:raphael, :bernard, :manu].flat_map {|organisateur| invitations_directes(organisateur, nombre_invitations_par_organisateur: 5) }
personnes_inscrites += tirage_au_sort(20)

def tirage_au_sort(nombre_max_inscriptions_tirees_au_sort)
    resultat = []
    tous_les_trois_jours do |date_tirage_au_sort|
        tirés_au_sort = liste_attente.tire_au_sort(personnes: 5)
        tirés_au_sort.each do |personnes_chanceuses|
        envoie_mail_notification_a(personnes_chanceuses.adresse_email)
        if personnes_chanceuses.inscrit_avant(date_tirage_au_sort + 2.days)
            resultat += personnes_chanceuses # youpi
            envoie_mail_confirmation_a(chanceux.adresse_email)
        else
            liste_attente.remove(personnes_chanceuses) #dommage
        end
    end
    resultat
end
```

#### D'autres questions ?

N'hésitez pas à [nous contacter](staff-at-agileopenfrance-point-com) pour nous
expliquer votre situation et demander des précisions.
