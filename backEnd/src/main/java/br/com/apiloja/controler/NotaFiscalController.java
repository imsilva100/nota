package br.com.apiloja.controler;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import br.com.apiloja.repository.ItensNotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.apiloja.modelo.NotaFiscal;
import br.com.apiloja.modelo.Produto;
import br.com.apiloja.repository.NotaFiscalRepository;
import br.com.apiloja.repository.ProdutoRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 10800)
public class NotaFiscalController {

	@Autowired
	private NotaFiscalRepository notaFiscalRepository;
	
	@Autowired
	private ProdutoRepository produtoRepostitory;

	@Autowired
	private ItensNotaRepository itensNotaRepository;
	
	@GetMapping("/notas")
	public List<NotaFiscal> getNotas() {
		return notaFiscalRepository.findAll();
	}

	@GetMapping("/notas/{id}")
	public NotaFiscal listarCodigo(@PathVariable(name = "id") Long id) {
		return notaFiscalRepository.findById(id).get();
	}


	 @PostMapping("/notas/nova")
	 @ResponseStatus(HttpStatus.CREATED) 
	 public NotaFiscal adiciona(@RequestBody NotaFiscal nota) {

		 BigDecimal valorTemp = new BigDecimal(1) ;

		 nota.getItensNota().forEach(item -> {
			item.setNota(nota);

			Optional<Produto> produto = produtoRepostitory.findById(item.getProduto().getId());
			
			item.setProduto(produto.get());
			
			item.setValor(item.getProduto().getPreco().multiply(item.getQuantidade()));


			nota.setValorTotalNota(item.getValor());


		 });

		 NotaFiscal nova = notaFiscalRepository.save(nota);	 
		 return nova;


	 }
	 

	@PutMapping("/notas/altera")
	public NotaFiscal altera(@RequestBody NotaFiscal nota) {
		return notaFiscalRepository.save(nota);
	}
	
	 @DeleteMapping("/notas/deleta/{id}")
	 public void deletaNota(@PathVariable Long id) {
		 notaFiscalRepository.deleteById(id);
	 }
	 
}
