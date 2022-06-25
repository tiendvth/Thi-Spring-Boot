package fpt.aptech.dangvantient2009m1.service;

import fpt.aptech.dangvantient2009m1.entity.Employee;
import fpt.aptech.dangvantient2009m1.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository productRespository) {
        this.employeeRepository = productRespository;
    }

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> findById(int id) {
        return employeeRepository.findById(id);
    }

    public Employee save(Employee stock) {
        return employeeRepository.save(stock);
    }

}
