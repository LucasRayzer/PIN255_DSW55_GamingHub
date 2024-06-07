package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Acesso;
import springboot.back.Repositorio.AcessoRepository;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/acesso")
public class AcessoController {
    /*private AcessoRepository acessoRepository;

    public AcessoController(AcessoRepository acessoRepository) {
        this.acessoRepository = acessoRepository;
    }

    @GetMapping("/all")
    public List<Acesso> getAll(){
        return acessoRepository.findAll();
    }
    @PostMapping("/create")
    public ResponseEntity<Acesso> createAcesso(@Valid @RequestBody Acesso acesso){
        Acesso savedAcesso = acessoRepository.save(acesso);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedAcesso.getIdAcesso())
                .toUri();
        return ResponseEntity.created(location).build();
    }*/

}
