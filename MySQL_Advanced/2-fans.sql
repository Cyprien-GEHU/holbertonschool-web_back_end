-- Ranks country origin of bande, order by the number of fans

SELECT origin, SUM(fans) AS nb_fan
FROM metal_bands
GROUP BY origin
ORDER BY nb_fan DESC;
