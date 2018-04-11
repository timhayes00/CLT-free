  USE CLTfree_db;
  
  INSERT INTO jobs (creator, job_name, job_description, job_category, email)
  VALUES ("Foo", "Foo Portfolio", "Hello, my name is Foo and I need an online portfolio of my painting work", "Web Design", "foo@foo.com");
  
  INSERT INTO jobs (creator, job_name, job_description, job_category, email)
  VALUES ("Bob", "Bob's Burgers", "I need a lawyer to defend against a copyright infringement suit", "Legal Services", "bob@notbobsburgers.com");
  
  INSERT INTO jobs (creator, job_name, job_description, job_category, email)
  VALUES ("Foo", "Foo's Food Truck app", "I need an interactive mobile app to allow people to order food from their phone for pickup", "Web Design", "foo@foo.com");
  
  INSERT INTO freelancers (freelancer_name, skill_set, img_link, bio, portfolio, linked_in, rate_requested, email)
  VALUES ("Tim Hayes", "Web Design", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg", "n00b junior web dev", "http://www.github.com", "http://www.linkedin.com", 40, "tim@tim.com"); 
  
  INSERT INTO freelancers (freelancer_name, skill_set, img_link, bio, portfolio, linked_in, rate_requested, email)
  VALUES ("Foo", "Handyman Services", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg", "Fixing up and painting houses for 20 years", "http://www.foo.com", "http://www.linkedin.com", 40, "foo@foo.com"); 
  
  INSERT INTO freelancers (freelancer_name, skill_set, img_link, bio, portfolio, linked_in, rate_requested, email)
  VALUES ("Sterling Archer", "Legal Services", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg", "Well, Legal-ish.  Willing to do anything for the right price.  Also, the worldest greatest secret agent", "http://www.archerthespy.com", "http://www.linkedin.com", 1000, "archer@archer.com");

  INSERT INTO users (username, password)
  VALUES ("foo@gmail2.com", "foo");