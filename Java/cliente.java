package model;

public class Cliente {
    private int id;
    private String nome;
    private String cpf;
    private String contato;

    public Cliente(int id, String nome, String cpf, String contato) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.contato = contato;
    }

    public void cadastrar() {
        // Lógica para cadastrar cliente
    }

    public void editar() {
        // Lógica para editar cliente
    }

    public void remover() {
        // Lógica para remover cliente
    }

    // Getters e Setters
}
