package dev.farhan.movies;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin(origins = "https://movie-gold-v1-five.vercel.app")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;


    @PostMapping("/{imdbId}")
    public ResponseEntity<Review> createReview(@RequestBody Map<String,String> payload){
        return new ResponseEntity<Review>( reviewService.createReview(payload.get("reviewBody") , payload.get("imdbId")) , HttpStatus.CREATED);
    }

}