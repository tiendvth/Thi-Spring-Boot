package fpt.aptech.dangvantient2009m1.api;

import fpt.aptech.dangvantient2009m1.entity.Employee;
import fpt.aptech.dangvantient2009m1.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/employee")
public class EmployeeApi {
    @Autowired
    EmployeeService employeeService;
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Employee> save(@RequestBody Employee product) {
        return ResponseEntity.ok(employeeService.save(product));
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Employee>> findAll() {
        return ResponseEntity.ok(employeeService.findAll());
    }

    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    public ResponseEntity<?> findById(@PathVariable int id) {
        Optional<Employee> product = employeeService.findById(id);
        if (!product.isPresent()){
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(product.get());
    }

}
