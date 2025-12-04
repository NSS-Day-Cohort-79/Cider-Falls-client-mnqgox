```mermaid
---
title: Cider Falls
---
flowchart TD
    main["main"]
    ParkAreas["ParkAreas"]
    Services["Services"]
    Guests["Guests"]
    database(["database"])
    main-->ParkAreas
    ParkAreas-->database
    ParkAreas-->Services
    Services-->database
    main-->Guests
    Guests-->database
```
