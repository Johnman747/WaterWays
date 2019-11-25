
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin_level" INTEGER NOT NULL
);
CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(120),
  "address" varchar(1000),
  "photo_primary" varchar,
  "description" varchar,
  "latitude" float8,
  "longitude" float8,
  "created_by" INTEGER references "user",
  "free" BOOLEAN DEFAULT FALSE,
  "spigot" BOOLEAN DEFAULT FALSE,
  "campground_access" BOOLEAN DEFAULT FALSE,
  "free_flowing" BOOLEAN DEFAULT FALSE,
  "rv" BOOLEAN DEFAULT FALSE,
  "artesian_well" BOOLEAN DEFAULT FALSE,
  "trail_water_source" BOOLEAN DEFAULT FALSE,
  "road_access" BOOLEAN DEFAULT FALSE,
  "dirt_road_access" BOOLEAN DEFAULT FALSE,
  "trail_access" BOOLEAN DEFAULT FALSE,
  "dirt_trail_access" BOOLEAN DEFAULT FALSE,
  "approve" BOOLEAN DEFAULT FALSE
);

CREATE Table "activity_log" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user",
  "location_id" INT references "locations" ON DELETE CASCADE,
  "issue_comment" varchar(120),
  "issue_type" varchar
);

CREATE Table "Photos" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user",
  "location_id" INT references "locations" ON DELETE CASCADE,
  "photo_img_string" varchar
);

CREATE Table "reviews" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT references "user",
  "location_id" INT references "locations" ON DELETE CASCADE,
  "comment" varchar,
  "review_score_of_five" INT
);
