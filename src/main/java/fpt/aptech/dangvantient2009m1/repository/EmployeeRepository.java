package fpt.aptech.dangvantient2009m1.repository;

import fpt.aptech.dangvantient2009m1.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
