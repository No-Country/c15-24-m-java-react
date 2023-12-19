package pet.api;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class DatabaseConnectionTest {

    public static void main(String[] args) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl(
                "jdbc:" +
                System.getenv("DB_URI")
        );
        dataSource.setUsername(
                System.getenv("DB_USER")
        );
        dataSource.setPassword(
                System.getenv("DB_PASSWORD")
        );

        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        try {
            String result = jdbcTemplate.queryForObject("SELECT 'Connected' ", String.class);

            System.out.println("Database connection succesful: " + result);
        } catch (Exception e) {

            System.err.println("Unable to connect to the database: " + e.getMessage());
        }

    }
}
