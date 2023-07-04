# TODOS list

## API for all games

- Game name
- Publisher name
- Rating
- [x] done

## API for a single game

- game name
- publisher name
- rating
- relase date
- version
- [x] done
- [ ] category

## API for all category 
- [x] done


## API for game-category
```sql
 create or replace view game_category as (
    select game_id, publisher_id, category_id, game_name, rating 
    from games 
    join games_category using (game_id) 
    join category using (category_id)
    join publisher using (publisher_id)
 );
```

- [x] done