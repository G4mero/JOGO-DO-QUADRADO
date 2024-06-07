package model;

public class Imovel {
    private int id;
    private String endereco;
    private String tipo;
    private double preco;
    private String status;

    public Imovel(int id, String endereco, String tipo, double preco, String status) {
        this.id = id;
        this.endereco = endereco;
        this.tipo = tipo;
        this.preco = preco;
        this.status = status;
    }

    public void registrar() {
        // Lógica para registrar imóvel
    }

    public void editar() {
        // Lógica para editar imóvel
    }

    public void remover() {
        // Lógica para remover imóvel
    }

    // Getters e Setters
}
