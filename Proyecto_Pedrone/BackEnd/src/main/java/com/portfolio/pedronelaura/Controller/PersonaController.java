package com.portfolio.pedronelaura.Controller;

import com.portfolio.pedronelaura.Entity.Persona;
import com.portfolio.pedronelaura.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class PersonaController {
     @Autowired IPersonaService iPersonaService;
     
     @GetMapping("/personas/traer")
     public List<Persona> getPersona(){
         return iPersonaService.getPersona();
     }
     @PreAuthorize("hasRole('ROL_ADMIN')")
     @PostMapping("/personas/crear")
     public String createPersona(@RequestBody Persona persona){
         iPersonaService.savePersona(persona);
         return "La persona fue creada correctamente";
     }
     @PreAuthorize("hasRole('ROL_ADMIN')")
     @DeleteMapping("/personas/borrar/{id}")
     public String deletePersona(@PathVariable Long id){
         iPersonaService.deletePersona(id);
         return "La persona fue eliminada correctamente";
     }
     
     @PreAuthorize("hasRole('ROL_ADMIN')")
     @PutMapping("/personas/editar/{id}")
     public Persona editPersona(@PathVariable Long id,
                                @RequestParam("nombre")String nuevoNombre,
                                @RequestParam("apellido")String nuevoApellido,
                                @RequestParam("img")String nuevoImg){
         Persona persona = iPersonaService.findPersona(id);
         persona.setNombre(nuevoNombre);
         persona.setApellido(nuevoApellido);
         persona.setImg(nuevoImg);
         
         iPersonaService.savePersona(persona);
         return persona;
     }
     
     @GetMapping("/personas/traer/perfil")
     public Persona findPersona(){
            return iPersonaService.findPersona((long)1);
     }
}
