package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutomatizaController {
    private final ComandoAutomatiza comandoAutomatiza;

    @Autowired
    public AutomatizaController(ComandoAutomatiza comandoAutomatiza) {
        this.comandoAutomatiza = comandoAutomatiza;
    }

    @GetMapping("/api/executeCommands/{steamId}")
    public String executeCommands(@PathVariable String steamId) {
        comandoAutomatiza.executeCommands(steamId);
        return "Funcionou";
    }
    @GetMapping("/api/executeCommands2/{steamId}")
    public String executeCommands2(@PathVariable String steamId) {
        comandoAutomatiza.executeCommands2(steamId);
        return "Funcionou";
    }
    @GetMapping("/api/executeCommands3")
    public String executeCommands3() {
        comandoAutomatiza.executeCommands3();
        return "Funcionou";
    }
}
