package com.datastructure2023.BackendPractice;

import java.util.Map;
import java.util.Collections;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Calculator {
    
    static class Numbers {
        private int firstNum;
        private int secondNum;

        public int getFirstNum() { return firstNum; }
        public int getSecondNum() { return secondNum; }

        public void setFirstNum(int data) { firstNum = data; }
        public void setSecondNum(int data) { secondNum = data; }
    }

    @PostMapping("/add")
    public Map<String, Integer> addNumbers(@RequestBody Numbers numbers) {
        int result = numbers.getFirstNum() + numbers.getSecondNum();
        return Collections.singletonMap("result", result);
    }
}
