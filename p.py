def somme_nombres_pairs(liste):
    somme = 0
    for nombre in liste:
        if nombre % 2 == 0:
            somme += nombre
    return somme


liste_de_nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
resultat = somme_nombres_pairs(liste_de_nombres)
print(f"La somme des nombres pairs dans la liste est : {resultat}")
