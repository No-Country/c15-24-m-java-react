package com.c1524m.petapp.exceptions;

public class PetNotFoundException  extends RuntimeException {

    public PetNotFoundException() {
        super("La mascota ingresada no existe.");
    }
}
